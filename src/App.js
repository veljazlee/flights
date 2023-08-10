import React from 'react';
import styles from './App.module.css'
import WorkerList from './components/workerlist/WorkerList';
import Infodiv from './components/infodiv/Infodiv'


function App(){
    const [workers, setWorkers]=React.useState([]);
    const [selectedWorker, setSelectedWorker]=React.useState(0);
    
    
    React.useEffect(()=>{
        fetch('https://api.npoint.io/61e9c08d8b39cf09d51a')
        .then((response)=>response.json())
        .then((data)=>setWorkers(data));
    },[]);

    let workerHandler=React.useCallback((ev, x)=>{
        setSelectedWorker(x);
    },[]);

    return <React.Fragment>
    <div id={styles.main}>
        {<WorkerList data={workers} handler={workerHandler} selected={selectedWorker}/>}
       { workers.length!==0 && <Infodiv worker={workers[selectedWorker].id} />}
    </div>
    </React.Fragment>
}

export default App