import React, { Component } from 'react';
import MaximizeIcon from '../MaximizeIcon/MaximizeIcon';
import './box.scss';
import arrowButton from './images/arrow-button.png';
import separator from '../../images/separator.png';
import linkedin from '../../images/social/linkedin.png';
import facebook from '../../images/social/facebook.png';
import instagram from '../../images/social/instagram.png';
import ig1 from "../../images/ig/ig-1.png";
import ig2 from "../../images/ig/ig-2.png";
import ig3 from "../../images/ig/ig-3.png";
import ig4 from "../../images/ig/ig-4.png";
import ig5 from "../../images/ig/ig-5.png";
import ig6 from "../../images/ig/ig-6.png";
import ig7 from "../../images/ig/ig-7.png";
import ig8 from "../../images/ig/ig-8.png";
import youtube from '../../images/social/youtube.png';
import twitter from '../../images/social/twitter.png';
import blog from "../../images/blog.png";

class Box extends Component {
    state = {
        flow_level: 0,
        flow_action: "",
        text_route: this.props.box.content,
        text: this.props.box.content.text,
        buttontext: this.props.box.content.buttontext,
        buttonimages: this.props.box.content.buttonimages,
        maximize: "minimize"
    }

    getImage() {
        switch (this.props.box.image) {
            case 'blog':
                return blog;
                break;
            case 'linkedin':
                return linkedin;
                break;
            case 'instagram':
                return instagram;
                break;
            case 'twitter':
                return twitter;
                break;
            case 'facebook':
                return facebook;
                break;
            case 'youtube':
                return youtube;
                break;
            default:
                return this.props.box.image;
                break;
        }
    }

    flowAction = (flow_action_param) => {
        this.setState({
            flow_level: this.state.flow_level+1,
            flow_action: flow_action_param,
        })

        if (this.state.text_route[flow_action_param]) {
            this.setState({
                text_route: this.state.text_route[flow_action_param],
            })

            if (this.state.text_route[flow_action_param].text) {
                this.setState({
                    text: this.state.text_route[flow_action_param].text
                })
            }
        }
    }

    oneFlowAction = () => {
        this.flowAction("optionone");
    }

    twoFlowAction = () => {
        this.flowAction("optiontwo");
    }

    imagesButtonFlowAction = () => {
        console.log("imagesselection");
    }

    toggleMaximize = (maximize_state) => {
        console.log(maximize_state);
        if(this.state.maximize == "minimize") {
            this.setState({
                maximize: "maximize"
            })
        } else {
            this.setState({
                maximize: "minimize"
            })
        }
    }

    render() {
        const {box} = this.props;
        const space = ' ';

        return(
            <div className={`box-container box-${box.type}`}>
                <div className={`box-content ${this.state.maximize}`}>
                    <MaximizeIcon onChange={this.toggleMaximize}/>
                    { box.title? <h2>{box.title}<br /><img className="separator" alt="Separator" src={separator} /></h2>  : "" }
                    { box.content? <p className="box-html-text" dangerouslySetInnerHTML={{__html: this.state.text}}></p> : null }
                    <div>
                        { this.state.text_route.optionone? <button className="flow-button" onClick={this.oneFlowAction}>{this.state.buttontext? this.state.buttontext.one : "Opción 1"}</button> : "" }
                        { this.state.text_route.optiontwo? space : ""}
                        { this.state.text_route.optiontwo? <button className="flow-button" onClick={this.twoFlowAction}>{this.state.buttontext.two? this.state.buttontext.two : "Opción 2"}</button>: "" }

                        { this.state.text_route.buttonimages? <div className="images-button">
                            <img className="images-button-img" alt="IG Photo" src={ig1}/>
                            <img className="images-button-img" alt="IG Photo" src={ig2}/>
                            <img className="images-button-img" alt="IG Photo" src={ig3}/>
                            <img className="images-button-img" alt="IG Photo" src={ig4}/>
                            <img className="images-button-img" alt="IG Photo" src={ig5}/>
                            <img className="images-button-img" alt="IG Photo" src={ig6}/>
                            <img className="images-button-img" alt="IG Photo" src={ig7}/>
                            <img className="images-button-img" alt="IG Photo" src={ig8}/>
                        </div> : "" }
                    </div>
                    <a href={box.url} target="_blank" rel="noopener noreferrer">
                        <div className="graphic-button">
                            <img alt="Box graphic" src={this.getImage()} /><img alt="Box arrow button" src={arrowButton} className="arrow-button"></img>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Box;