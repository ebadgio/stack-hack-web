import React from 'react';
import URL from '../info';

// Modules
import Input from "./modules/Input";
import TextArea from "./modules/TextArea";
import Button from "./modules/Button";
import Portal from "./modules/Portal";

// Elements
import Scalene from './elements/Scalene';

class Bottom extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false,
            loading: false,
            failure: false,
            success: false,
            missingFields: false
        };
    }

    hide() {
        this.setState({show: false});
    }

    render() {
        return (
            <div className="bottom-wrapper fill-light">
                <Scalene fill={'#fff'} className={"wide-scalene"}/>
                <div className="wrapper">
                    <div className="bottom-info-wrapper" id="contact">
                        <div className="cover-info-title center-text">
                            Join Stack Hack today!
                        </div>
                        <div className="heading-description center-text"
                             style={{marginBottom: '40px', color: '#fff'}}>
                            If you're interested and/or want more info, then contact us using the link below. Make sure to include your name
                            and a brief description of what you wish to discuss and we'll get back to you shortly!
                        </div>
                        <a href="mailto:stackhack.team@gmail.com" className="ghost">
                            <Button 
                                id="submit"
                                className="trans-grey soft-edge"
                                icon="far fa-envelope"
                                text="Contact us"
                                clickFunc={() => {}}
                            />
                        </a>
                    </div>
                </div>
                {this.state.show ? <Portal failure={this.state.failure}
                                           endFunc={() => this.hide()}
                                           success={this.state.success}
                                           time={2000}/> : <div />}
                <div id="bottom-block">
                    <Scalene fill={'#3884FF'} className={"wide-scalene"}/>
                    <div className="section-wrapper">
                        <div className="fit-row contain" id="ending-block">
                            <div className="basic-row">
                                <img className="nav-logo"
                                     src="https://s3.amazonaws.com/stack-hack-tutoring/stack-hack-logo-7.svg" />
                                <span className="nav-title" style={{color: '#fff'}}>Stack Hack Tutoring</span>
                            </div>
                            <div className="basic-row" id="contact">
                                <div className="flex-col" style={{marginRight: '20px', alignItems: 'flex-end'}}>
                                    <div style={{color: '#ececec', marginBottom: '5px'}}><strong>CONTACT</strong></div>
                                    <div><a href="mailto:stackhack.team@gmail.com">stackhack.team@gmail.com</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Bottom;