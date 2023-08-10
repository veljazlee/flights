import React from 'react';
import styles from './TableData.module.css'

function TableData(props){

return <td className={styles.tabledata}>{props.data}</td>
}

export default TableData