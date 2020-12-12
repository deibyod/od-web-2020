import React, { Component } from 'react';
import './box.scss';
import arrowButton from './images/arrow-button.png';
import separator from '../../images/separator.png';
import linkedin from '../../images/social/linkedin.png';
import facebook from '../../images/social/facebook.png';
import instagram from '../../images/social/instagram.png';
import youtube from '../../images/social/youtube.png';
import twitter from '../../images/social/linkedin.png';
import blog from "../../images/blog.png";

class Box extends Component { 
    state = {
        flow_level: 0,
        flow_action: "",
        text_route: this.props.box.content,
        text: this.props.box.content.text
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

    yesFlowAction = () => {
        this.flowAction("yes");
    }

    noFlowAction = () => {
        this.flowAction("no");
    }

    render() {
        const {box} = this.props;

        return(
            <div className={`box-container box-${box.type}`}>
                <div className="box-content">
                    { box.title? <h2>{box.title}</h2> : "" }
                    { box.title? <img className="separator" alt="Separator" src={separator} /> : "" }
                    { box.content? <p className="box-html-text" dangerouslySetInnerHTML={{__html: this.state.text}}></p> : null }
                    { this.state.text_route.yes? <div><button className="flow-button" onClick={this.yesFlowAction}>SI</button> <button className="flow-button" onClick={this.noFlowAction}>NO</button></div> : "" }
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