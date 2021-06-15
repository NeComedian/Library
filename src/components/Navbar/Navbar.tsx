import React, {FC} from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar:FC = () => {
    return (
        <nav>
            <div className={s.item}>
                <NavLink to="/library" activeClassName={s.activeLink}>Library</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/add" activeClassName={s.activeLink}>add</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
