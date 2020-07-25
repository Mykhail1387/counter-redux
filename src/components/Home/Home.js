import React from 'react';
import css from './Home.module.css';
import Nav from '../Nav/Nav';

const Home = () => {
    return (
        <div className={css.wrapper}>
            <Nav />
        </div>
    )
}

export default Home;