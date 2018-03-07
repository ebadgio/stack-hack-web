import React from 'react';
import PropTypes from 'prop-types';


class Navbar extends React.Component {
    constructor() {
        super();
        this.state ={};
    }


    render() {
        return(
            <div className="navbar">
                <div style={{
                    display: 'flex',
                    alignItems: 'center'}}>
                    <img className="nav-logo"
                         src="https://s3.amazonaws.com/stack-hack-tutoring/stack-hack-logo-4.svg" />
                    <span className="nav-title">Stack Hack Tutoring</span>
                </div>
            </div>
        );
    }

}



Navbar.propTypes = {
};

export default Navbar;