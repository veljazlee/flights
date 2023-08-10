import React from "react";
import styles from "./ListItem.module.css";

function ListItem(props) {
    
  let classes = `${styles.listitem}`;
  if (props.index === props.selected) {
    classes = classes + ` ${styles.selected}`;
  }

  return (
    <li
      className={classes}
      onClick={(ev) => {
        props.handler(ev, props.index);
      }}
      id={props.data.id}
    >
      {props.data.name}
    </li>
  );
}
export default ListItem;
