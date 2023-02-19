import React from "react";

import './Header.styles.css';
import Logo from '../Logo/Logo.component';

const Header = ({mode}) => (
    <div className={`header ${mode==='dark' ? 'dark' : ''}`}>
        <div className='logo-container'>
            <Logo className='logo' mode={mode}/>
        </div>
    </div>
)

export default Header;