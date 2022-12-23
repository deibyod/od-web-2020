import React, { Component } from 'react';
import './referral-option.scss';
import platzi from './images/platzi.png';
import soyfocus from './images/soyfocus.png';
import nuevepunto5 from './images/9punto5.png';

class ReferralOption extends Component {
    state = {
        text_route: this.props.referral_option.content,
        text: this.props.referral_option.content.text,
    }

    getImage() {
        switch (this.props.referral_option.image) {
            case 'platzi':
                return platzi;
            case 'soyfocus':
                return soyfocus;
            case 'nuevepunto5':
                return nuevepunto5;
            default:
                return this.props.referral_option.image;
        }
    }

    render() {
        const {referral_option} = this.props;

        return(
            <div className={`referral-option-container`}>
                <div className={`referral-option-content`}>
                    { referral_option.title? <h2>{referral_option.title}<br /></h2>  : "" }
                    { referral_option.content? <p className="referral-option-html-text" dangerouslySetInnerHTML={{__html: this.state.text}}></p> : null }
                    <a href={referral_option.url} target="_blank" rel="noopener noreferrer">
                        <div className="graphic-button">
                            <img alt="Referral option graphic" src={this.getImage()} />
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default ReferralOption;