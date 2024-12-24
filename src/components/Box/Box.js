import React, { Component } from 'react';
import MaximizeIcon from '../MaximizeIcon/MaximizeIcon';
import './box.scss';
import arrowButton from './images/arrow-button.png';
import separator from '../../images/separator.png';
import ig1 from "../../images/ig/ig-1.png";
import ig2 from "../../images/ig/ig-2.png";
import ig3 from "../../images/ig/ig-3.png";
import ig4 from "../../images/ig/ig-4.png";
import ig5 from "../../images/ig/ig-5.png";
import ig6 from "../../images/ig/ig-6.png";
import ig7 from "../../images/ig/ig-7.png";
import ig8 from "../../images/ig/ig-8.png";
const imagesIg = require.context('../../images/ig', false, /\.(png|jpe?g|svg)$/);
const imagesSocial = require.context('../../images/social', false, /\.(png|jpe?g|svg)$/);
const imagesResources = require.context('../../images/resources', false, /\.(png|jpe?g|svg)$/);
const imagesRoot = require.context('../../images', false, /\.(png|jpe?g|svg)$/);

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
        const imageName = this.props.box.image;

        try {
            return imagesIg(`./${imageName}.png`);
        } catch (error) {
            try {
                return imagesSocial(`./${imageName}.png`);
            } catch (error) {
                try {
                    return imagesResources(`./${imageName}.png`);
                } catch (error) {
                    try {
                        return imagesRoot(`./${imageName}.png`);
                    } catch (error) {
                        console.error(`Error loading image: ${imageName}.png`, error);
                        return null;
                    }
                }
            }
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
                        {this.state.text_route.optionone ? (
                            <button className="flow-button" onClick={this.oneFlowAction}>
                                {this.state.buttontext ? this.state.buttontext.one : "Opción 1"}
                            </button>
                        ) : null}
                        {this.state.text_route.optiontwo ? space : null}
                        {this.state.text_route.optiontwo ? (
                            <button className="flow-button" onClick={this.twoFlowAction}>
                                {this.state.buttontext.two ? this.state.buttontext.two : "Opción 2"}
                            </button>
                        ) : null}
                        {this.state.text_route.buttonimages ? (
                            <div className="images-button">
                                <img className="images-button-img" alt="IG" src={ig1} />
                                <img className="images-button-img" alt="IG" src={ig2} />
                                <img className="images-button-img" alt="IG" src={ig3} />
                                <img className="images-button-img" alt="IG" src={ig4} />
                                <img className="images-button-img" alt="IG" src={ig5} />
                                <img className="images-button-img" alt="IG" src={ig6} />
                                <img className="images-button-img" alt="IG" src={ig7} />
                                <img className="images-button-img" alt="IG" src={ig8} />
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