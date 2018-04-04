import React from 'react';
import axios from 'axios';
import URL from '../../../../info';

import Input from "../modules/Input";
import TextArea from "../modules/TextArea";
import Button from "../modules/Button";
import Portal from "../modules/Portal";

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


    addContact() {

        const fname = document.getElementById('fname');
        const lname = document.getElementById('lname');
        const email = document.getElementById('email');
        const disc = document.getElementById('discussion');

        const fnameVal = fname.value;
        const lnameVal = lname.value;
        const emailVal = email.value;
        const discVal = disc.value;

        const now = new Date();
        const date = now.toDateString() + " " + now.toLocaleTimeString();

        if (!fnameVal) {
            fname.style.border = "1px solid #FF5252";
            this.setState({missingFields: true});
        }

        if (!lnameVal) {
            lname.style.border = "1px solid #FF5252";
            this.setState({missingFields: true});
        }

        if (!emailVal) {
            email.style.border = "1px solid #FF5252";
            this.setState({missingFields: true});
        }

        if (!discVal) {
            disc.style.border = "1px solid #FF5252";
            this.setState({missingFields: true});
        }

        if (fnameVal && lnameVal && emailVal && discVal) {

            this.setState({loading: true});

            axios.post(URL + 'db/add/contact', {
                fname: fnameVal,
                lname: lnameVal,
                email: emailVal,
                discussion: discVal,
                submitted: date
            })
                .then((res) => {

                    console.log('res', res);

                    fname.value = '';
                    lname.value = '';
                    email.value = '';
                    disc.value = '';

                    this.setState({
                        loading : false,
                        show : true,
                        success : true,
                        failure : false
                    })

                })
                .catch((err) => {

                    console.log('err', err);

                    this.setState({
                        loading : false,
                        show : true,
                        success : false,
                        failure : true
                    })

                });
        }
    };

    hide() {
        this.setState({show: false});
    }

    render() {
        return (
            <div className="bottom-wrapper">
                <div className="cover-photo-wrapper"
                     style={{filter: 'none'}}
                     id="exit">
                    <div className="bottom-cover-wrapper">
                        <div className="filter">
                            <div className="bottom-info-wrapper" id="contact">
                                <div className="cover-info-title">
                                    Join Stack Hack today!
                                </div>
                                <div className="heading-description"
                                     style={{marginBottom: '40px', color: '#fff'}}>
                                    If you're interested and/or want more info, then enter your name, email,
                                    and a brief description of what you wish to discuss below and we'll reach out to you shortly!
                                </div>
                                <div className="contact-enter-wrapper">
                                    <div className="fit-row">
                                        <Input id="fname"
                                               placeholder="First Name"
                                               width="45%"/>
                                        <Input id="lname"
                                               placeholder="Last Name"
                                               width="45%"/>
                                    </div>
                                    <div className="fit-row">
                                        <Input id="email" placeholder="Email (e.g. jane.doe@gmail.com)" width="100%"/>
                                    </div>
                                    <TextArea id="discussion"
                                              width="calc(100% - 22px)"
                                              rows="4"
                                              placeholder={"What would you like to discuss?"}/>
                                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                        {this.state.missingFields ? <div className="failure" style={{alignSelf: 'center'}}>
                                            * Missing Required Fields *
                                        </div> : <div />}
                                        <Button id="submit"
                                                loading={this.state.loading}
                                                text="Submit"
                                                clickFunc={this.state.loading ? () => {} : () => this.addContact()}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.show ? <Portal failure={this.state.failure}
                                           endFunc={() => this.hide()}
                                           success={this.state.success}
                                           time={2000}/> : <div />}
                <div id="bottom-block">
                    <div id="bottom-block-content">
                        <div className="fit-row" id="ending-block">
                            <div className="basic-row">
                                <img className="nav-logo"
                                     src="https://s3.amazonaws.com/stack-hack-tutoring/stack-hack-logo-7.svg" />
                                <span className="nav-title" style={{color: '#fff'}}>Stack Hack Tutoring</span>
                            </div>
                            <div className="basic-row" id="contact">
                                <div className="flex-col" style={{marginRight: '20px', alignItems: 'flex-end'}}>
                                    <div style={{color: '#ececec', marginBottom: '5px'}}><strong>CONTACT</strong></div>
                                    <div style={{color: '#bdbdbd'}}>610-256-1767</div>
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