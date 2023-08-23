import React, { Component } from 'react';

import SectionTitle from '../SectionTitle/SectionTitle';
import Subscription from '../Subscription/Subscription';
import Boxes from '../Boxes/Boxes';
import ReferralOptions from '../ReferralOptions/ReferralOptions';
import Map from '../Map/Map';

import './content.scss';

import ResourcesSpacesContent from '../../data/ResourcesBoxesContent.json';
import PersonalSpacesContent from '../../data/PersonalBoxesContent.json';
import ProfessionalSpacesContent from '../../data/ProfessionalBoxesContent.json';
import ReferralsContent from '../../data/ReferralsContent.json';

class Content extends Component {
    state = {
        profile: "personal"
    }

    getContent() {
        switch (this.state.profile) {
            case 'eac':
                return "Enterprise Agile Coach - Perfil En Construcción";
            case 'sd':
                return "Software Developer - En Construcción";
            case 'personal':
                return this.getPersonalContent();
            default:
                return this.getPersonalContent();
        }
    }

    toggleMaximize = (event) => {
        if(this.state.maximize === "minimized") {
            this.setState({
                maximize: "maximized"
            });
        } else {
            this.setState({
                maximize: "minimized"
            });
        }
    }

    getPersonalContent() {
        return(
            <div className="personal-content-container">
                <SectionTitle title={"¿Qué contenidos gratuitos tengo?"}/>
                <Boxes boxContent={ResourcesSpacesContent} />
                <Subscription />
                <SectionTitle title={"¿Dónde estoy en internet?"}/>
                <h1>PROFESIONAL</h1>
                <Boxes boxContent={ProfessionalSpacesContent} />
                <h1>PERSONAL</h1>
                <Boxes boxContent={PersonalSpacesContent} />
                <h1>REFERIDOS</h1>
                <ReferralOptions optionContent={ReferralsContent} />
                <SectionTitle title={"¿Dónde estoy presencialmente?"}/>
                <Map />
            </div>
        )
     }

    render() {
        return(
            <div className="content-container">
                {this.getContent()}
            </div>
        )
    }
}

export default Content;