import React from 'react';
import './header.scss';
import PersonalPhoto1 from './images/photos/deibyod-1.png';
import PersonalPhoto2 from './images/photos/deibyod-2.png';
import PersonalPhoto3 from './images/photos/deibyod-3.png';
import PersonalPhoto4 from './images/photos/deibyod-4.png';
import PersonalPhoto5 from './images/photos/deibyod-5.png';
import PersonalPhoto6 from './images/photos/deibyod-6.png';

const PersonalPhoto = [
    PersonalPhoto1,
    PersonalPhoto2,
    PersonalPhoto3,
    PersonalPhoto4,
    PersonalPhoto5,
    PersonalPhoto6,
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const Header = ()  => {
    return(
        <div className="header-container">
            <a href="http://www.deibyod.co" rel="noopener noreferrer">
                <img className="personal-photo" src={PersonalPhoto[getRandomInt(1, 6)]} alt="Deiby Od profile" />
            </a>
            <p className="name-style"><strong>Deiby</strong> Fabian <strong>O</strong>rdoñez <strong>D</strong>iaz</p>
        </div>
    )
}

export default Header;