import React from 'react';
import {FaChevronDown} from 'react-icons/fa';
import {Link} from 'react-router-dom';

import Section from '../Section/Section';

import styles from './Landing.module.css';

const Landing = () => {
    return (
        <div className={styles.landing}>
            <header className={styles.header}>
                <h1>About Page</h1>
                <FaChevronDown className={styles.icon} />
            </header>
            <Section 
                title='Member Bio Section'
                content=''
            />
            <Section title='Community engagement' />
        </div>
    )
}

export default Landing;