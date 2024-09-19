import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom';

import ContentContainer from '../ContentContainer/ContentContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import Subscription from '../Subscription/Subscription';
import Boxes from '../Boxes/Boxes';
import ReferralOptions from '../ReferralOptions/ReferralOptions';
import Map from '../Map/Map';

import './content-manager.scss';

import TabBar from '../TabBar/TabBar';
import CorporateServicesContent from '../../data/CorporateServicesBoxesContent.json';
import IndividualServicesContent from '../../data/IndividualServicesBoxesContent.json';
import ResourcesSpacesContent from '../../data/ResourcesBoxesContent.json';
import PersonalSpacesContent from '../../data/PersonalBoxesContent.json';
import ProfessionalSpacesContent from '../../data/ProfessionalBoxesContent.json';
import ReferralsContent from '../../data/ReferralsContent.json';
import SwDevInterestBoxesContent from '../../data/SwDevInterestBoxesContent.json';

class ContentManager extends Component {

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
                <SectionTitle title={"¿Qué Servicios Corporativos ofrezco?"}/>
                <Boxes boxContent={CorporateServicesContent} />
                <SectionTitle title={"¿Qué Servicios Individuales ofrezco?"}/>
                <Boxes boxContent={IndividualServicesContent} />
                <SectionTitle title={"¿Que contenidos tengo para compartir?"}/>
                <Boxes boxContent={ResourcesSpacesContent} />
                <SectionTitle title={"¿Cuales son mis redes profesionales?"}/>
                <Boxes boxContent={ProfessionalSpacesContent} />
            </div>
        )
    }

    getSoftwareDevContent() {
        const softwareDevContent = "Desarrollo software, en su mayoría como voluntario o comunitario, desde hace más de 12 años. En el futuro cargaré aquí mi portafolio histórico."; 

        return(
            <div className="softwaredev-content-container">
                <SectionTitle title={"¿Qué he hecho?"}/>
                <ContentContainer content={softwareDevContent} />
                <SectionTitle title={"Cuales son mis intereses?"}/>
                <Boxes boxContent={SwDevInterestBoxesContent} />
            </div>
        )
    }

    getPrivateInvestorContent() {
        const privateInvestorContent = "Invierto en distintos instrumentos. Proximamente espero cargar aquí contenido relativo a mis labores de inversión."; 

        return(
            <div className="softwaredev-content-container">
                <SectionTitle title={"¿Qué hago?"}/>
                <ContentContainer content={privateInvestorContent} />
            </div>
        )
    }

    getOnlineShopContent() {
        const onlineShopContent = "Una tienda para ser diferentes (BETA): http://vorder.deibyod.co";

        return(
            <div className="onlineshop-content-container">
                <SectionTitle title={"Vorder"}/>
                <ContentContainer content={onlineShopContent} />
            </div>
        )
    }

    render() {
        return(
            <div className="content-manager-container">

                <TabBar />
                <Routes>
                    <Route path="/enterprise-agile-coach" element={this.getEACContent()} />
                    <Route path="/software-developer" element={this.getSoftwareDevContent()} />
                    <Route path="/private-investor" element={this.getPrivateInvestorContent()} />
                    <Route path="/online-store" element={this.getOnlineShopContent()} />
                    <Route path="/personal" element={this.getPersonalContent()} />
                </Routes>
            </div>
        )
    }
}

export default ContentManager;