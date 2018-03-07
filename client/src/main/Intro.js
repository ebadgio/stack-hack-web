import React from 'react';

const Intro = ({}) => {

    return (
        <div className="intro-wrapper">
            <i className="fas fa-code code-icon" />
            <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20px', marginRight: '20px'}}>
                <div className="heading">
                    Decode the Code
                </div>
                <div className="heading-description">
                    We provide you with the foundation and skills to dive into the world of tech and take control of your future.
                </div>
            </div>
            <i className="fas fa-code code-icon" />
        </div>
    );
};

export default Intro;