import React from "react";
import ListItem from "../listitem/ListItem.js";

import styles from "./WorkerList.module.css";
function WorkerList(props) {
  
  let workerList=props.data.map((item, index) => (
    <ListItem
      data={item}
      key={index}
      handler={props.handler}
      index={props.data.indexOf(item)}
      selected={props.selected}
    />
  ));

  return (
    <div id={styles.workerlist}>
      <div id={styles.naslov}>WORKERS</div>
      <ul id={styles.lista}>{workerList}</ul>
    </div>
  );
}

export default WorkerList;
