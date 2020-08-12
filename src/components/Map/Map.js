import React from 'react';
import './map.scss';
import BackgroundImage from './images/world-map.png';
import BackgroundImageMini from './images/world-map-mini.png';

const Map = ()  => {
    return(
        <div className="map-container">
            <img className="big-map" alt="World Map" src={BackgroundImage} />
            <img className="small-map" alt="World Map" src={BackgroundImageMini} />
        </div>
    )
}

export default Map;