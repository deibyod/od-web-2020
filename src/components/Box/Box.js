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
import video from '../../images/resources/video.png';
import twitter from '../../images/social/twitter.png';
import blog from "../../images/blog.png";
import vorder from "../../images/vorder-v.png";

class Box extends Component {
    state = {
        flow_level: 0,
        flow_action: "",
        box: this.props.box,
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
            case 'video':
                return video;
            case 'vorder':
                return vorder;
            /*case 'github':
                return github;
            case 'gitlab':
                return gitlab;*/
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
        //console.log("imagesselection");
    }

    toggleMaximize = () => {
        this.setState((prevState) => ({ maximize: prevState.maximize ? '' : 'maximize' }));
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

    getLink() {
        let links = this.state.box.url;

        //console.log(this.state.box.url);

        if(typeof this.state.box.url === 'object') {
            return(
                <>
                {Object.entries(links).map(([key, link]) => {
                    return(
                        <a key={key} href={link.url} target="_blank" rel="noopener noreferrer">
                            <div className="graphic-button graphic-and-text-button">
                                <img className='icon' alt="Box graphic" src={this.getImage()} /> {link.text} <img alt="Box arrow button" src={arrowButton} className="arrow-button"></img>
                            </div>
                        </a>
                    )
                })}
                </>
            )
        } else if (this.state.box.url !== undefined) {
            return (
                <a href={this.state.box.url} target="_blank" rel="noopener noreferrer">
                    <div className="graphic-button">
                        <img alt="Box graphic" src={this.getImage()} /><img alt="Box arrow button" src={arrowButton} className="arrow-button"></img>
                    </div>
                </a>
            )
        } else {
            return ("")
        }
     }

    renderButton = (condition, onClick, text) => {
        return condition ? <button className="flow-button" onClick={onClick}>{text}</button> : null;
    }

    renderImages = () => {
        const images = [ig1, ig2, ig3, ig4, ig5, ig6, ig7, ig8];
        return images.map((src, index) => (
            <img key={index} className="images-button-img" alt="IG" src={src} />
        ));
    }

    render() {
        const { box } = this.props;
        const space = ' ';

        return (
            <div className={`box-container box-${box.type} ${this.state.maximize}`} onClick={this.exitMaximize}>
                <div className="box-content">
                    <MaximizeIcon toggleMaximize={this.toggleMaximize} />
                    {box.title ? (
                        <h2>
                            {box.title}
                            <br />
                            <img className="separator" alt="Separator" src={separator} />
                        </h2>
                    ) : null}
                    {box.content ? (
                        <p className="box-html-text" dangerouslySetInnerHTML={{ __html: this.state.text }}></p>
                    ) : null}
                    <div>
                        {this.renderButton(this.state.text_route.optionone, this.oneFlowAction, this.state.buttontext ? this.state.buttontext.one : "Opción 1")}
                        {this.state.text_route.optiontwo ? space : null}
                        {this.renderButton(this.state.text_route.optiontwo, this.twoFlowAction, this.state.buttontext ? this.state.buttontext.two : "Opción 2")}
                        {this.state.text_route.buttonimages ? (
                            <div className="images-button">
                                {this.renderImages()}
                            </div>
                        ) : null}
                    </div>
                    {this.getLink()}
                </div>
            </div>
        );
    }
}

export default Box;