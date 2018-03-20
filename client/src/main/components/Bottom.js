import React from 'react';
import axios from 'axios';
import URL from '../../../../info';

import Input from "../modules/Input";
import TextArea from "../modules/TextArea";

const Bottom = ({}) => {

    const addContact = () => {
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const email = document.getElementById('email').value;
        const disc = document.getElementById('discussion').value;
        const now = new Date();
        const date = now.toDateString() + " " + now.toLocaleTimeString();
        axios.post(URL + 'db/add/contact', {
            fname: fname,
            lname: lname,
            email: email,
            discussion: disc,
            submitted: date
        })
            .then((res) => {
                console.log('res', res);
                document.getElementById('fname').value = '';
                document.getElementById('lname').value = '';
                document.getElementById('email').value = '';
                document.getElementById('discussion').value = '';
            })
            .catch((err) => {
                console.log('err', err);
            });
    };

    return (
        <div style={{width: '100%'}}>
            <div className="cover-photo-wrapper" id="exit">
            </div>
            <div className="bottom-cover-wrapper">
                <div className="bottom-info-wrapper">
                    <div className="cover-info-title">
                        Join Stack Hack today!
                    </div>
                    <div className="heading-description" style={{marginBottom: '40px'}}>
                        If you're interested and/or want more info, then enter your name, email,
                        and a brief description of what you wish to discuss below and we'll reach out to you shortly!
                    </div>
                    <div className="contact-enter-wrapper">
                        <div className="fit-row">
                            <Input id="fname" placeholder="First Name" width="45%"/>
                            <Input id="lname" placeholder="Last Name" width="45%"/>
                        </div>
                        <div className="fit-row">
                            <Input id="email" placeholder="Email (e.g. jane.doe@gmail.com)" width="100%"/>
                        </div>
                        <TextArea id="discussion" width="calc(100% - 22px)" rows="4" placeholder={"What would you like to discuss?"}/>
                        <div className="btn" id="submit" onClick={() => addContact()}>
                            <span>Submit</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="bottom-block">

            </div>
        </div>
    );

};

export default Bottom;