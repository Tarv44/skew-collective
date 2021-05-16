import React from 'react';
import './Nav.css'

const GenBtn = (props) => {
    return (
        <nav>
            <button onClick={e => props.generate(e)}>Generate</button>
        </nav>
    )
}

export default GenBtn;