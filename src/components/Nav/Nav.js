import React from 'react';
import { Link } from 'react-router-dom';
import css from './Nav.module.css';


const Nav = () => {
    return (
        <ul>
            <li className={css.list}>
                <Link className={css.link} to="/star">star</Link>
            </li>
            <li className={css.list}>
                <Link className={css.link} to="/counter">counter</Link>
            </li>
        </ul>
    )
}

export default Nav;