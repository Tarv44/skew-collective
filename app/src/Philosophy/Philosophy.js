import React from 'react';
import {FaChevronDown} from 'react-icons/fa';

import Section from '../Section/Section';

import styles from './Philosophy.module.css';

const Philosophy = () => {
    return (
        <div className={styles.philosophy}>
            <header className={styles.header}>
                <h1>Philosophy Page</h1>
                <FaChevronDown className={styles.icon} />
            </header>
            <Section 
                content='first talk about the need for this type of thinking in a “late style” context. A note on Cage maybe. The objective criteria in art have exploded/dissolved, meaning any artistic choice can be validated/justified. In a context of unlimited possibilities, people need to narrow their choices in order not to be overwhelmed by the blank page. People are not able to perceive true randomness, we are not able to perceive infinity.'
            />
            <Section 
                content='Usually, people resort to intuition to narrow down the possibilities and create. This intuition is formed and guided by society, upbringing, personal tastes, culture, and aesthetic predeterminations. However, it can also be the source of writer’s block and cliche. As many doors as intuition opens, it’s just as responsible for the walls that hold it up.'
            />
            <Section 
                content='The point of Skew is to free artists from this intuition.'
            />
            <Section 
                content='We do this by … (method)'
            />
        </div>
    )
}

export default Philosophy;