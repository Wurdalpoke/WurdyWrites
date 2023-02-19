import React from "react";
import { useParams } from "react-router-dom";

import './ListPage.styles.css';
import List from "../../components/List/List.component";

const ListPage = ({prop, mode}) => {
  let { id } = useParams();
  
  return(
  <section className="list-section">
    <div className="list-title-container">
      <span className="list-title">{id}</span> 
    </div>
    <div className="solid-separator"></div>
    <List prop={id==='Posts' ? (prop) : (prop.filter((propi) => propi[1].includes(id)))} mode={mode}/>
  </section>
)}

export default ListPage;