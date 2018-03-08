import React from 'react';
import PropTypes from 'prop-types';

// Components
import Navbar from "./Navbar";
import Cover from "./Cover";
import Overview from "./Overview";
import Syllabus from "./Syllabus";
import Pricing from "./Pricing";
import Team from "./Team";
import Bottom from "./Bottom";


class App extends React.Component {
    constructor() {
        super();
        this.state ={};
    }


    render() {
        return(
            <div className="flex-col">
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