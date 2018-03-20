import React from 'react';

const Cover = ({}) => {

    return (
        <div style={{marginBottom: '70px', width: '100%'}}>
            <div className="cover-photo-wrapper" id="landing">
                <img style={{display: 'none'}} src="https://s3.amazonaws.com/stack-hack-tutoring/emile-perron-190221-unsplash.jpg"/>
                {/*<img className="cover-photo"*/}
                     {/*src="https://s3.amazonaws.com/stack-hack-tutoring/artem-sapegin-176819-unsplash.jpg"/>*/}
            </div>
            {/*<div className="cover-info-wrapper">*/}
                {/*<img className="cover-info-logo" src="https://s3.amazonaws.com/stack-hack-tutoring/stack-hack-logo-4.svg"/>*/}
                {/*<span className="cover-info-title">Stack Hack Tutoring</span>*/}
            {/*</div>*/}
            <div className="topic-page-cover-cont-shadow">
                <div className="cover-info-wrapper">
                    {/*<img className="cover-info-logo" src="https://s3.amazonaws.com/stack-hack-tutoring/stack-hack-logo-4.svg"/>*/}
                    <div className="cover-info-title">Decode the Code with Stack Hack</div>
                    <div className="heading-description">
                        A guided introduction to the world of computer science
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;