import React from 'react';
import './footer.scss';
import logo from '../../logo.svg';

const Footer = ()  => {
    return(
        <div className="footer-container">
            <p>Gracias<br />Por visitarme</p>
            <img src={logo} className="App-logo" alt="logo" />
            <p className='code-reference'>Desarrollado en React con componentes 100% originales</p>
            <p className='copyright'>&copy; Deiby Od. 2020-2024 </p>
        </div>
    )
}

export default Footer;