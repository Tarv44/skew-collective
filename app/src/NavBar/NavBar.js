import React from 'react';
import {Link} from 'react-router-dom';

import styles from './NavBar.module.css';
import globalStyles from '../global.module.css';

const NavBar = (props) => {
    return ( props.location.pathname !== '/' ?
        <div className={styles.NavBar}>
            <Link className={globalStyles.btnLink}  to='/'><h2>SKEW logo</h2></Link>
            <nav className={styles.nav}>
                <Link className={globalStyles.btnLink} to='/philosophy'>Artistic Concept</Link>
                <Link className={globalStyles.btnLink} to='/about'>Who We Are</Link>
                <Link className={globalStyles.btnLink} to='/visual-art-generator'>Creations Gallery</Link>
            </nav>
        </div>
        : null
    )
};

export default NavBar;