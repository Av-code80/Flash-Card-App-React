import React from 'react'
import classes from './HeaderLogout.module.css'

const HeaderLogout = () => {
    return (
        <header className={classes.header}>
        <h1>FLASH CARD APP</h1>
       <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><button>LOGOUT</button></li>
        </ul>
       </nav>
        </header>
    )
}

export default HeaderLogout
