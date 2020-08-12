import React from 'react';
import './header.scss';
import Me from './images/deibyod.png';

const Header = ()  => {
    return(
        <div className="header-container">
            <a href="http://www.deibyod.co" rel="noopener noreferrer"><img src={Me} className="personal-photo" alt="Deiby Od" /></a>
            <p className="name-style"><strong>Deiby</strong> Fabian <strong>O</strong>rdoñez <strong>D</strong>iaz</p>
        </div>
    )
}

export default Header;