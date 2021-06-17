import React from 'react';
import {FaChevronDown} from 'react-icons/fa';

import Section from '../Section/Section';
import content from './philContent';

import styles from './Philosophy.module.css';

const Philosophy = () => {
    const sections = content.map((c, i) => {
        return <Section content={c} key={i} />
    })

    return (
        <div className={styles.philosophy}>
            <header className={styles.header}>
                <h1>Philosophy Page</h1>
                <FaChevronDown className={styles.icon} />
            </header>
            {sections}
        </div>
    )
}

export default Philosophy;