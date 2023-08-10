import React from 'react';
import styles from './Infodiv.module.css'
import FlightTable from '../flighttable/FlightTable'
import InfoTable from '../infotable/InfoTable'
import SelectedCTX from '../context/SelectedCTX';

function Infodiv(props){
    
    const [selectedFlight, setSelectedFlight]=React.useState(0);
    const [flightsData, setFlightsData]=React.useState([]);
    const {worker}={...props}
    
    React.useEffect(()=>{
        fetch(`https://api.npoint.io/${worker}`)
        .then((response)=>response.json())
        .then((datax)=>{setFlightsData(datax);setSelectedFlight(0)});
    },[worker]);
    function rowClickHandler(ev, x){
       
        setSelectedFlight((old)=>x)
    }
    
return <div id={styles.infodiv}>
            <SelectedCTX.Provider  value={{currentRow:selectedFlight, worker:props.worker }}>
            <FlightTable flights={flightsData}  handler={rowClickHandler} />
            <InfoTable  currentRow={selectedFlight} worker={props.worker} />
            </SelectedCTX.Provider>
</div>
}

export default Infodiv