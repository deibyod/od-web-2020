import React from 'react';
import './footer.scss';
import logo from '../../logo.svg';

const Footer = ()  => {
    return(
        <div className="footer-container">
            <p>Gracias<br />Por visitarme</p>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    )
}

export default Footer;