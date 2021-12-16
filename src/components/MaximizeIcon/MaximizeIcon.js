import React, { Component }  from 'react';
import './maximize-icon.scss';
import maximizeImage from './images/maximize.png';
import minimizeImage from './images/minimize.png';

class Maximize extends Component {
    state = {
        image_state: "maximize"
    }

    toggleState = () => {
        if(this.state.image_state == "maximize") {
            this.setState({
                image_state: "minimize"
            })
        } else {
            this.setState({
                image_state: "maximize"
            })
        }
    }

    render() {
        return(
            <div className={`maximize-container ${this.state.image_state}`} onClick={this.toggleState}>
            </div>
        )
    }
}

export default Maximize;