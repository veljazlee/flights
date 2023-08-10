import React from 'react';
import styles from  './InfoTable.module.css'


function InfoTable(props){
    const [flightsData, setFlightsData]=React.useState([]);
    const lastWorker=React.useRef('');
    
    

    const download=(url)=>{
        fetch(`https://api.npoint.io/${url}`)
        .then((response)=>response.json())
        .then((data)=>{setFlightsData(data)})
        .catch(()=>{setFlightsData([])});   
    }
    

    React.useEffect(()=>{
        let urlSufix=lastWorker.current !== props.worker ? `${props.worker}/0` : `${props.worker}/${props.currentRow}`;
        lastWorker.current=props.worker;
        download(urlSufix);
        let interval=setInterval(()=>download(urlSufix), 60000); //refreshes every minute
        return ()=>{clearInterval(interval)}
    },[props])


    let hours=flightsData.length!==0 ? Math.floor(flightsData.duration/60): '';
    let minuts=flightsData.length!==0 ? flightsData.duration%60 : '';
 return <table id={styles.infotable}>
    <tbody>
        <tr><th>Plane Number</th><td>{flightsData.plane}</td></tr>
        <tr><th>Duration</th><td>{`${hours}h ${minuts}m`}</td></tr>
        <tr><th>Origin Gate</th><td>{flightsData['from_gate']}</td></tr>
        <tr><th>Destination Gate</th><td>{flightsData['to_gate']}</td></tr>
    </tbody>
 </table>
}
export default InfoTable