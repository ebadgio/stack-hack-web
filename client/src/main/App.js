import React from 'react';
import PropTypes from 'prop-types';

// Components
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import Overview from "./components/Overview";
import Syllabus from "./components/Syllabus";
import Pricing from "./components/Pricing";
import Team from "./components/Team";
import Bottom from "./components/Bottom";


class App extends React.Component {
    constructor() {
        super();
        this.state ={};
    }


    render() {
        return(
            <div className="flex-col" id="main-wrapper" style={{width: '100%'}}>
                <Navbar />
                <Cover />
                <Overview />
                <Syllabus/>
                <Pricing />
                <Team />
                <Bottom />
            </div>
        );
    }

}



App.propTypes = {
};

export default App;