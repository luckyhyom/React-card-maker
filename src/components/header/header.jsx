import React from 'react';
import style from '../header/header.module.css';

const Header = ({onLogout}) => ( 
    <header className={style.header}>
        {onLogout && (
        <button onClick={onLogout} className={style.onLogout}>
            logout
        </button>
        )}
        <img className={style.logo} src="./images/logo.png" alt="logo" />
        <span>business card maker</span>
    </header>);

export default Header;