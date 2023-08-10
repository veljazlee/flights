import React from 'react';
import TableRow from './tablerow/TableRow'
import styles from './FlightTable.module.css'
import TableHeader from './tableheader/TableHeader'



function FlightTable(props){
    
    let rows=props.flights.map((item, index)=><TableRow key={index} data={item}  index={index} flights={props.flights}/>)
    
return <div id={styles.flighttable}>
    <table id={styles.table} >
    <TableHeader />
    <tbody onClick={(ev)=>{props.handler(ev, ev.target.parentElement.rowIndex-1)}}>
    {rows}
    </tbody>
    </table>
</div>
}

export default FlightTable