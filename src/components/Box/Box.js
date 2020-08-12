import React from 'react';
import './box.scss';
import arrowButton from './images/arrow-button.png';

const Box = ({ box })  => {
    return(
        <div className={`box-container box-${box.type}`}>
            <div className="box-content">
                <p className="box-text">{box.text}</p>
                <a href={box.url} target="_blank" rel="noopener noreferrer">
                    <div className="graphic-button">
                        <img alt="Box graphic" src={box.image} /><img alt="Box arrow button" src={arrowButton}></img>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Box;