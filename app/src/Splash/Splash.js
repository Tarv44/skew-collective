import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {API_ENDPOINT} from '../config';
import ClipLoader from "react-spinners/ClipLoader";
import globalStyles from '../global.module.css';
import styles from './Splash.module.css';

const Splash = () => {
  const [BG, setBG] = useState('')

  const style = {
    backgroundImage: `url(${BG})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const generateBG = () => {
    const cellSize = 15
    const width = Math.ceil(window.innerWidth/cellSize)
    const height = Math.ceil(window.innerHeight/cellSize)
    const body = {width, height, cellSize}
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    } 

    fetch(`${API_ENDPOINT}/generate/visual-art-generator`, options)
      .then(res => {
        if (!res.ok) {
          return res.json().then(err => { throw err })
        }
        return res.json()
      })
      .then(res => {
        setBG(res.svg)
      })
  }

  useEffect(() => {
    generateBG()
  }, [])

  return (
    <div className={styles.splash} style={style}>
      {BG ? <div className={styles.content}>
        <div className={styles.copy}>
          <h1>SKEW</h1>
          <h3>A Method for Constructing Style</h3>
          <p>Skew Collective is a coalition of artists dedicated to expanding creativity past the confines of intuitive bias.</p>
        </div>
        <div className={styles.links}>
          <Link to='/philosophy' className={`${globalStyles.btnLink} ${styles.btnLink}`}>Artistic Concept</Link>
          <Link to='/about' className={`${globalStyles.btnLink} ${styles.btnLink}`}>Who We Are</Link>
          <Link to='/visual-art-generator' className={`${globalStyles.btnLink} ${styles.btnLink}`}>Browse Creations</Link>
        </div>
      </div> : <ClipLoader  color={"black"} loading={true} size={150} />}
      <div className={styles.bg} dangerouslySetInnerHTML={{__html: BG}} />
    </div> 
  )
}

export default Splash;