import React from "react";
import "./ListItem.styles.css";
import WurdyWrites from '../../../src/assets/WurdyWrites.png';
import { Link } from "react-router-dom";

const ListItem = ({prop, mode}) => {
    const windowScrolllTop = () => {window.scrollTo({top: 0, behavior: 'smooth'})};
    return(
    <div className={`list-item ${mode==='dark' ? 'dark' : ''}`}>
        <img src={prop[0]==='Who am I?' ? WurdyWrites : prop[3]}></img>
        <div className={`list-item-desc ${mode==='dark' ? 'dark' : ''}`}>
            <p className="list-item-title"><Link onClick={windowScrolllTop} to={`/post/${prop[0]}`}>{prop[0]}</Link></p>
            <div className="list-item-solid-separator"></div>
            <span className="list-item-text">{prop[2].map((propi, idx) => (
                propi==='' ? (<br key={idx}></br>) : (<p key={idx}>{propi}</p>)
            ))}</span>
            <p className="read-more"><Link onClick={windowScrolllTop} to={`/post/${prop[0]}`}>Read More</Link></p>
        </div>
    </div>
)}

export default ListItem;