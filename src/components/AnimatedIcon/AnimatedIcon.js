import React, { Component } from 'react';
import './animated-icon.scss';
const images = require.context('./images', false, /\.(png|gif|svg)$/);

class AnimatedIcon extends Component {
    getImage(imageType) {
        const imageName = this.props.iconName;

        try {
            return images(`./${imageName}.${imageType}`);
        } catch (error) {
            console.error(`Error loading image: ${imageName}.${imageType}`, error);
            return null;
        }
    }

    render() {
        const { iconName, isHovered } = this.props;
        const imageType = isHovered ? 'gif' : 'png';

        if (!iconName) {
            return null;
        }

        return (
            <div className="animated-icon-container">
                <img className='animated-icon' alt="Animated Icon" src={this.getImage(imageType)} />
            </div>
        );
    }
}

export default AnimatedIcon;