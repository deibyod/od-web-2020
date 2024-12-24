import React, { Component } from 'react';
import './referral-option.scss';
// Crear un contexto para importar todas las imágenes de una carpeta
const images = require.context('./images', true, /\.(png|jpe?g|svg)$/);


class ReferralOption extends Component {
    state = {
        text_route: this.props.referral_option.content,
        text: this.props.referral_option.content.text,
    }

    getImage() {
        const imageName = this.props.referral_option.image;
        return images(`./${imageName}.png`);
    }

    render() {
        const {referral_option} = this.props;

        return(
            <div className={`referral-option-container`}>
                <a href={referral_option.url} target="_blank" rel="noopener noreferrer">
                    <div className="brand-logo">
                        <img alt={referral_option.title} src={this.getImage()} />
                    </div>
                </a>
                <div className={`referral-option-content`}>
                    { referral_option.content? <p className="referral-option-html-text" dangerouslySetInnerHTML={{__html: this.state.text}}></p> : null }
                    <a href={referral_option.url} target="_blank" rel="noopener noreferrer" className='referral-link'>
                        {referral_option.url}
                    </a>
                </div>
            </div>
        )
    }
}

export default ReferralOption;