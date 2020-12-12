import React from 'react';
import Box from '../Box/Box';
import './boxes.scss';
import SpacesContent from '../../data/BoxesContent.json';

const Boxes = ()  => {
    return(
        <div className="boxes-container">
            {SpacesContent.map((singleBox) => (<Box key={singleBox.id} box={singleBox} />))}
        </div>
    )
}

export default Boxes;