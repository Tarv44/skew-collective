import React from 'react';

import styles from './Section.module.css';

const Section = (props) => {
    return (
        <section className={styles.section}>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </section>
    )
}

export default Section;