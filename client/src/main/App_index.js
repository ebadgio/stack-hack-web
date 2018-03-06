import React from 'react';
import PropTypes from 'prop-types';

// Components
import Navbar from "./Navbar";


class App extends React.Component {
    constructor() {
        super();
        this.state ={};
    }


    render() {
        return(
            <div className="main-wrapper">
                <Navbar />
                <div className="cover-photo-wrapper">
                    <img className="cover-photo"
                         style={{display: 'none'}}
                         src="https://s3.amazonaws.com/stack-hack-tutoring/samson-duborg-rankin-91091.jpg" />
                    <img className="cover-photo"
                         src="https://s3.amazonaws.com/stack-hack-tutoring/artem-sapegin-176819-unsplash.jpg"/>
                </div>
                <div className="cover-info-wrapper">
                    <img className="cover-info-logo" src="https://s3.amazonaws.com/stack-hack-tutoring/stack-hack-logo-4.svg"/>
                    <span className="cover-info-title">Stack Hack Tutoring</span>
                </div>
                <div style={{display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    marginTop: '40px',
                    maxWidth: '950px', width: '100%'}}>
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
            </div>
        );
    }

}



App.propTypes = {
};

export default App;