import React, { Component } from 'react';

import ContentContainer from '../ContentContainer/ContentContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import Subscription from '../Subscription/Subscription';
import Boxes from '../Boxes/Boxes';
import ReferralOptions from '../ReferralOptions/ReferralOptions';
import Map from '../Map/Map';

import './content-manager.scss';

import ResourcesSpacesContent from '../../data/ResourcesBoxesContent.json';
import PersonalSpacesContent from '../../data/PersonalBoxesContent.json';
import ProfessionalSpacesContent from '../../data/ProfessionalBoxesContent.json';
import ReferralsContent from '../../data/ReferralsContent.json';
import SwDevInterestBoxesContent from '../../data/SwDevInterestBoxesContent.json';

class ContentManager extends Component {
    state = {
        profile: "personal"
    }

    getContent() {
        switch (this.state.profile) {
            case 'eac':
                return this.getEACContent();
            case 'sd':
                return this.getSoftwareDevContent();
            case 'shop':
                return this.getOnlineShopContent();
            case 'personal':
                return this.getPersonalContent();
            default:
                return this.getPersonalContent();
        }
    }

    goToProfile = (event) => {
        const profile = event.currentTarget.getAttribute('data-profile');

        this.setState({
            profile: profile
        });
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
                <SectionTitle title={"Cuales son mis redes profesionales?"}/>
                <Boxes boxContent={ProfessionalSpacesContent} />
            </div>
        )
    }

    getSoftwareDevContent() {
        const softwareDevContent = "Desarrollo software, en su mayoría como voluntario o comunitario, desde hace más de 12 años. Proximamente, aquí cargaré mi portafolio histórico."; 

        return(
            <div className="softwaredev-content-container">
                <SectionTitle title={"¿Qué he hecho?"}/>
                <ContentContainer content={softwareDevContent} />
                <SectionTitle title={"Cuales son mis intereses?"}/>
                <Boxes boxContent={SwDevInterestBoxesContent} />
            </div>
        )
    }

    getOnlineShopContent() {
        const onlineShopContent = "Estamos trabajando en un nuevo proyecto de Tienda en Línea. Esperalo pronto.";

        return(
            <div className="onlineshop-content-container">
                <SectionTitle title={"Proximamente..."}/>
                <ContentContainer content={onlineShopContent} />
            </div>
        )
    }

    render() {
        return(
            <div className="content-manager-container">
                <h1>PERFILES</h1>
                <div className='tab-bar'>
                    <span data-profile="eac" onClick={this.goToProfile}>Enterprise Agile Coach</span>
                    <span data-profile="sd" onClick={this.goToProfile}>Software Developer</span>
                    <span data-profile="shop" onClick={this.goToProfile}>Tienda Online</span>
                    <span data-profile="personal" onClick={this.goToProfile}>Personal</span>
                </div>

                {this.getContent()}
            </div>
        )
    }
}

export default ContentManager;