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
                return this.getEACContent();
            case 'sd':
                return "Software Developer - En Construcción";
            case 'personal':
                return this.getPersonalContent();
            default:
                return this.getPersonalContent();
        }
    }

    goToProfile = (event) => {
        console.log(event);
        if(this.state.profile !== "personal") {
            this.setState({
                maximize: "personal"
            });
        } else {
            this.setState({
                maximize: "eac"
            });
        }
    }

    getPersonalContent() {
        return(
            <div className="personal-content-container">
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
     getEACContent() {
        return(
            <div className="eac-content-container">
                <SectionTitle title={"¿Que contenidos tengo para compartir?"}/>
                <Boxes boxContent={ResourcesSpacesContent} />
                <Subscription />
                <SectionTitle title={"Cuales son mis redes profesionales?"}/>
                <h1>CURRICULUM COMPLETO</h1>
                <Boxes boxContent={ProfessionalSpacesContent} />
            </div>
        )
     }

    render() {
        return(
            <div className="content-container">
                <h1>PERFILES</h1>
                <div className='tab-bar'><a href="#">Enterprise Agile Coach</a><a href="#">Software Developer</a><a href="#">Personal</a></div>
                {this.getContent()}
            </div>
        )
    }
}

export default Content;