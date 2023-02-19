import React from "react";
import './List.styles.css';
import ListItem from "../ListItem/ListItem.component";

const List = ({prop, mode}) => {
    
    return(
        prop.map((propi, idx) => (<ListItem key={idx} prop={propi} mode={mode}/>))
)}

export default List;
