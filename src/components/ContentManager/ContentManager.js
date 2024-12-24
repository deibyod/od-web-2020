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
import InvestmentstBoxesContent from '../../data/InvestmentsBoxesContent.json';
import StoreBoxesContent from '../../data/StoreBoxesContent.json';


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
                <SectionTitle title={"Servicios Corporativos"}/>
                <Boxes boxContent={CorporateServicesContent} />
                <SectionTitle title={"Servicios Individuales"}/>
                <Boxes boxContent={IndividualServicesContent} />
                <SectionTitle title={"Contenidos"}/>
                <Boxes boxContent={ResourcesSpacesContent} />
                <SectionTitle title={"Redes profesionales"}/>
                <Boxes boxContent={ProfessionalSpacesContent} />
            </div>
        )
    }

    getSoftwareDevContent() {
        const softwareDevContent = "Desarrollo software, en su mayoría como voluntario o comunitario, desde hace más de 12 años."; 

        return(
            <div className="softwaredev-content-container">
                <SectionTitle title={"¿Qué he hecho?"}/>
                <ContentContainer content={softwareDevContent} />
                <SectionTitle title={"Mis intereses"}/>
                <Boxes boxContent={SwDevInterestBoxesContent} />
            </div>
        )
    }

    getPrivateInvestorContent() {
        const privateInvestorContent = "Invierto en distintos instrumentos. Si compartes algún interés de inversión conmigo, conversémos."; 

        return(
            <div className="softwaredev-content-container">
                <SectionTitle title={"¿Qué hago?"}/>
                <ContentContainer content={privateInvestorContent} />
                <SectionTitle title={"Mis inversiones"}/>
                <Boxes boxContent={InvestmentstBoxesContent} />
            </div>
        )
    }

    getOnlineShopContent() {
        const onlineShopContent = "Mi negocio de comercio electrónico";

        return(
            <div className="onlineshop-content-container">
                <SectionTitle title={"Vorder"}/>
                <ContentContainer content={onlineShopContent} />
                <Boxes boxContent={StoreBoxesContent} />
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