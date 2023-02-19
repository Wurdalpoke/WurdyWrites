import React from "react";
import './HomePage.styles.css';
import { Link } from "react-router-dom";

const HomePage = ({}) => (
    <section className="home-page">
      <div className="intro">Wurdy Writes About...</div>
      <ul className="category-list">
        <li><Link to='/list/Economy'>Economy</Link></li>
        <li><Link to='/list/History'>History</Link></li>
        <li><Link to='/list/Investing'>Investing</Link></li>
      </ul> 
    </section>
)

export default HomePage;