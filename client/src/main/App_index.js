import React from 'react';
import PropTypes from 'prop-types';

// Components
import Navbar from "./Navbar";
import Cover from "./Cover";
import Intro from "./Intro";
import Overview from "./Overview";


class App extends React.Component {
    constructor() {
        super();
        this.state ={};
    }


    render() {
        return(
            <div className="main-wrapper">
                <Navbar />
                <Cover />
                {/*<Intro />*/}
                <Overview />
            </div>
        );
    }

}



App.propTypes = {
};

export default App;