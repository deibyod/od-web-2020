import React, { Component }  from 'react';
import './maximize-icon.scss';

class Maximize extends Component {
    state = {
        image_state: "maximize"
    }

    toggleState = () => {
        if(this.state.image_state === "maximize") {
            this.setState({
                image_state: "minimize"
            })
        } else {
            this.setState({
                image_state: "maximize"
            })
        }
        this.props.toggleMaximize();
    }

    render() {
        return(
            <div className={`maximize-container ${this.state.image_state}`} onClick={this.toggleState}>
            </div>
        )
    }
}

export default Maximize;