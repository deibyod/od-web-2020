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
        maximize: "minimized"
    }

    getImage() {
        switch (this.props.box.image) {
            case 'blog':
                return blog;
            case 'linkedin':
                return linkedin;
            case 'instagram':
                return instagram;
            case 'twitter':
                return twitter;
            case 'facebook':
                return facebook;
            case 'youtube':
                return youtube;
            default:
                return this.props.box.image;
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

    exitMaximize = (event) => {
        if (event.target.contains(document.getElementsByClassName('maximized')[0])) {
            if(this.state.maximize === "maximized") {
                this.setState({
                    maximize: "minimized"
                });
            }
        }
    }

    render() {
        const {box} = this.props;
        const space = ' ';

        return(
            <div className={`box-container box-${box.type} ${this.state.maximize}`} onClick={this.exitMaximize}>
                <div className={`box-content`}>
                    <MaximizeIcon toggleMaximize={this.toggleMaximize}/>
                    { box.title? <h2>{box.title}<br /><img className="separator" alt="Separator" src={separator} /></h2>  : "" }
                    { box.content? <p className="box-html-text" dangerouslySetInnerHTML={{__html: this.state.text}}></p> : null }
                    <div>
                        { this.state.text_route.optionone? <button className="flow-button" onClick={this.oneFlowAction}>{this.state.buttontext? this.state.buttontext.one : "Opción 1"}</button> : "" }
                        { this.state.text_route.optiontwo? space : ""}
                        { this.state.text_route.optiontwo? <button className="flow-button" onClick={this.twoFlowAction}>{this.state.buttontext.two? this.state.buttontext.two : "Opción 2"}</button>: "" }

                        { this.state.text_route.buttonimages? <div className="images-button">
                            <img className="images-button-img" alt="IG" src={ig1}/>
                            <img className="images-button-img" alt="IG" src={ig2}/>
                            <img className="images-button-img" alt="IG" src={ig3}/>
                            <img className="images-button-img" alt="IG" src={ig4}/>
                            <img className="images-button-img" alt="IG" src={ig5}/>
                            <img className="images-button-img" alt="IG" src={ig6}/>
                            <img className="images-button-img" alt="IG" src={ig7}/>
                            <img className="images-button-img" alt="IG" src={ig8}/>
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