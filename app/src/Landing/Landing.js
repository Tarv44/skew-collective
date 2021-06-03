import React from 'react';
import {FaChevronDown} from 'react-icons/fa';
import {Link} from 'react-router-dom';

import Section from '../Section/Section';

import styles from './Landing.module.css';

const Landing = () => {
    return (
        <div className={styles.landing}>
            <header className={styles.header}>
                <h1>SKEW</h1>
                <h2>A Method for Constructing Style</h2>
                <h4>Skew Collective is a coalition of artists dedicated to expanding creativity past the confines of intuitive bias.</h4>
                <div className={styles.actionBtns}>
                    <Link to='/philosophy'><button>Philosophy</button></Link>
                    <Link to='/visual-art-generator'><button>Works</button></Link>
                </div>
                <FaChevronDown className={styles.icon} />
            </header>
            <Section 
                title='Examples of spectra in various mediums'
                content='We do this by exhaustively identifying elements of contrast, conceptualized on a spectrum between two poles: music exists between no sound and the loudest possible, painting exists between the photo-real and fully abstract.'
            />
            <Section 
                title='Gaining awareness of preconception'
                content='Under close examination (of art through this lens), patterns of preconception arise in each medium, which the artist may then interrogate. A more specific critique of larger stylistic choices within the contemporary community of any given medium. Why are all the paintings these days abstract? Why is all the contemporary classical music either completely without or completely with harmonic rhythm?'
            />
            <Section 
                title='The creative act we engage in is the recombination of the parameters themselves.'
                content='Lay out several spectra in a visual way. Show specific areas of them highlighted. Describe that the combination of these areas on spectra leads to the creation of genre/style.'
            />
            <Section 
                title='This reveals infinite possibilities, so we use computers to further remove our intuition.'
                content='This can be expanded for the website version. Answer how we use them by expanding on the section above with recombination of parameters. We can either use computers to decide where the areas of the spectrum will be. Or we can use them once we’ve decided on the spectrum to fill in the minutia.'
            />
            <Section 
                title='Member Bio Section'
                content=''
            />
            <Section 
                title='Navigation to further pages'
                content=''
            />
        </div>
    )
}

export default Landing;