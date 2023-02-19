import React from "react";
import { Link } from "react-router-dom";

import './Logo.styles.css';

const Logo = ({mode}) => {
  console.log(mode);
  return(
    <div title="Wanna go Home?">
      <span><Link className={`bevan ${mode==='dark' ? 'dark' : ''}`} to='/'>Wurdy</Link></span>
      <span><Link className={`berkshireswash ${mode==='dark' ? 'dark' : ''}`} to='/'>Writes</Link></span> 
    </div>
  )
}

export default Logo;