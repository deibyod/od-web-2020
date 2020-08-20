import React from 'react';
import './box.scss';
import arrowButton from './images/arrow-button.png';
import separator from '../../images/separator.png';

const Box = ({ box })  => {
    return(
        <div className={`box-container box-${box.type}`}>
            <div className="box-content">
                { box.title? <h2>{box.title}</h2> : "" }
                { box.title? <img class="separator" alt="Separator" src={separator} /> : "" }
                { box.title? <p className="box-html-text" dangerouslySetInnerHTML={{__html: box.text}}></p> : <p className="box-text">{box.text}</p> }
                <a href={box.url} target="_blank" rel="noopener noreferrer">
                    <div className="graphic-button">
                        <img alt="Box graphic" src={box.image} /><img alt="Box arrow button" src={arrowButton} className="arrow-button"></img>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Box;