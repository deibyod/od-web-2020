import React, { Component }  from 'react';
import './maximize-icon.scss';

class MaximizeIcon extends Component {
    state = {
        image_state: "maximize"
    }

    toggleState = () => {
        this.setState((prevState) => ({
            image_state: prevState.image_state === "maximize" ? "minimize" : "maximize"
        }));
        this.props.toggleMaximize();
    }

    render() {
        return(
            <div className={`maximize-container ${this.props.maximizeState}`} onClick={this.toggleState}>
            </div>
        )
    }
}

export default MaximizeIcon;