import React, { Component } from 'react';

import './content-container.scss';

class ContentContainer extends Component {
    render() {
        const {content} = this.props;

        return(
            <div className="content-container">
                <div className="content">
                    {content}
                </div>
            </div>
        )
    }
}

export default ContentContainer;