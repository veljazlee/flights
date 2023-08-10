import React from 'react';
import TableData from '../tabledata/TableData'
import styles from './TableRow.module.css'
import SelectedCTX from '../../context/SelectedCTX' 


function TableRow(props){
   let ctx=React.useContext(SelectedCTX);
   let classes= ctx.currentRow===props.index ? `${styles.tablerow} ${styles.rowselected}` : `${styles.tablerow}`
 
return <tr  className={classes}> 
    <TableData data={props.data.num}/>
    <TableData data={props.data.from}/>
    <TableData data={props.data['from_date']}/>
    <TableData data={props.data.to}/>
    <TableData data={props.data['to_date']}/>
</tr>
}
export default TableRow
