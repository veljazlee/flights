import styles from './TableHeader.module.css'


function TableHeader(){
    return <thead id={styles.thead}>
           <tr>
            <th>Flight number</th>
            <th>Origin</th>
            <th>Origin date</th>
            <th>Destination</th>
            <th>Destination date</th>
           </tr>
    </thead>
}

export default TableHeader