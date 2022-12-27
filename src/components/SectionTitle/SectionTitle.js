import React, { Component } from 'react';
import './section-title.scss';

class SectionTitle extends Component {
    render() {
        console.log( this.props.title);
        return(
            <div className="section-title-container">
                { this.props.title? <h1>{this.props.title}</h1>  : "" }
            </div>
        )
    }
}

export default SectionTitle;