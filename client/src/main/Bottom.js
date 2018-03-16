import React from 'react';
import Input from "./Input";
import TextArea from "./TextArea";

const Bottom = ({}) => {

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
                        <div style={{width: '100%', marginBottom: '15px', display: 'flex', justifyContent: 'space-between'}}>
                            <Input placeholder="First Name" width="45%"/>
                            <Input placeholder="Last Name" width="45%"/>
                        </div>
                        <TextArea width="calc(100% - 22px)" rows="4" placeholder={"What do you want to discuss?"}/>
                        <div className="btn" id="submit">
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