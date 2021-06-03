import React from 'react';
import {Link} from 'react-router-dom';

import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <Link to='/'><h2>SKEW logo</h2></Link>
            <nav className={styles.nav}>
                <Link to='/philosophy'>Philosophy</Link>
                <Link to='/visual-art-generator'>Works</Link>
            </nav>
        </div>
    )
};

export default NavBar;