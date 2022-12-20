import React, { Component } from 'react';
import './opening.scss';
import OpeningContent from '../../data/OpeningContent.json';

class Opening extends Component {
    state = {
        title: OpeningContent.title,
        contentText: OpeningContent.content.text,
    }

    render() {
        return(
            <div className={`opening-container`}>
                <div className={`opening-content`}>
                    { this.state.title? <h2>{this.state.title}</h2>  : "" }
                    { this.state.contentText? <p className="opening-html-text" dangerouslySetInnerHTML={{__html: this.state.contentText}}></p> : null }
                </div>
            </div>
        )
    }
}

export default Opening;