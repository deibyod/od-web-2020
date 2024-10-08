import React from 'react';
import './header.scss';

import PersonalPhoto1 from './images/photos/deibyod-1.jpg';
import PersonalPhoto2 from './images/photos/deibyod-2.jpg';
import PersonalPhoto3 from './images/photos/deibyod-3.jpg';
import PersonalPhoto4 from './images/photos/deibyod-4.jpg';
import PersonalPhoto5 from './images/photos/deibyod-5.jpg';
import PersonalPhoto6 from './images/photos/deibyod-6.jpg';
import PersonalPhoto7 from './images/photos/deibyod-7.jpg';

const PersonalPhoto = [
    PersonalPhoto1,
    PersonalPhoto2,
    PersonalPhoto3,
    PersonalPhoto4,
    PersonalPhoto5,
    PersonalPhoto6,
    PersonalPhoto7,
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
                <img className="personal-photo" src={PersonalPhoto[getRandomInt(1, 7)]} alt="Deiby Od profile" />
            </a>
            <p className="name-style"><strong>Deiby</strong> Fabian <strong>O</strong>rdoñez <strong>D</strong>iaz</p>
        </div>
    )
}

export default Header;