import React from "react";
import "./ListItem.styles.css";
import Logo from '../../../src/assets/logo192.png';
import { Link } from "react-router-dom";

const ListItem = ({prop, mode}) => {
    return(
    <div className={`list-item ${mode==='dark' ? 'dark' : ''}`}>
        <img src={Logo}></img>
        <div className={`list-item-desc ${mode==='dark' ? 'dark' : ''}`}>
            <p className="list-item-title"><Link to={`/post/${prop[0]}`}>{prop[0]}</Link></p>
            <div className="list-item-solid-separator"></div>
            <span className="list-item-text">{prop[2].map((propi, idx) => (
                propi==='' ? (<br key={idx}></br>) : (<p key={idx}>{propi}</p>)
            ))}</span>
            <p className="read-more"><Link to={`/post/${prop[0]}`}>Read More</Link></p>
        </div>
    </div>
)}

export default ListItem;