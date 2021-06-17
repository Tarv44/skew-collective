import React, {useState} from 'react';
import GenBtn from './GenBtn/GenBtn';

import './VAG.css';
import GridStatus from './ParamsDisplay/GridStatus';
import ClipLoader from "react-spinners/ClipLoader";

import {API_ENDPOINT} from '../config'

const VAG = (props) => {
  const [generating, setGenerating] = useState(false)
  const [svg, setSVG] = useState(null)
  const [params, setParams] = useState(null)

  //Start or restart filling grid.
  const generateGrid = (e) => {
    e.preventDefault();
    setGenerating(true)
    setSVG(null)
    const wndWidth = window.innerWidth
    const wndHeight = window.innerHeight
    let width, height, cellSize
    if (wndWidth >= wndHeight) {
      width = 350
      cellSize = wndWidth/width
      height = Math.ceil(wndHeight/cellSize)
    } else {
      height = 120
      cellSize = wndHeight/height
      width = Math.ceil(wndWidth/cellSize)
    }
    const body = {width, height, cellSize}

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    } 

    fetch(`${API_ENDPOINT}/generate/visual-art-generator`,options)
      .then(res => {
        if (!res.ok) {
          return res.json().then(err => { throw err })
        }
        return res.json()
      })
      .then(res => {
        setParams(res.params)
        setSVG(res.svg)
        setGenerating(false)
      })
  }
  
  
  const totalCells = (width, height) => {
    let cellSize
    let totalColumns
    let totalRows
    if (width >= height) {
      totalColumns = 350
      cellSize = width/totalColumns
      totalRows = Math.ceil(height/cellSize)
    } else {
        totalRows = 120
        cellSize = height/totalRows
        totalColumns = Math.ceil(width/cellSize)
    }
    return totalColumns * totalRows
  }

  const LoadingMsg = (
    <div style={{textAlign: "center"}}>
      <p>This program uses an algorithm to randomly color pixels based on various probabilities.</p>
      <p>Given your screen size, the program is currently generating {totalCells(window.innerWidth,window.innerHeight)} uniquely colored pixels.</p>
      <p>This could take a few seconds...</p>
      <ClipLoader color={"black"} loading={true} size={150} />
    </div>
  )

  return (
      <div className="App">
        <GenBtn generate={generateGrid}/>
        <main>
          {generating
            ? LoadingMsg
            : <div dangerouslySetInnerHTML={{__html: svg}} />}
          {svg !== null && <GridStatus params={params}/>}
        </main>
      </div>   
  );
}

export default VAG;