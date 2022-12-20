/*import React from 'react';
import Box from '../Box/Box';
import './boxes.scss';

const Boxes = ()  => {
    const {SpacesContent} = this.props;

    return(
        <div className="boxes-container">
            {SpacesContent.map((singleBox) => (<Box key={singleBox.id} box={singleBox} />))}
        </div>
    )
}

export default Boxes;*/

import React, { Component } from 'react';
import Box from '../Box/Box';
import './boxes.scss';
class Boxes extends Component {

    render() {
        const {boxContent} = this.props;

        return(
            <div className="boxes-container">
                {boxContent.map((singleBox) => (<Box key={singleBox.id} box={singleBox} />))}
            </div>
        )
    }
}

export default Boxes;