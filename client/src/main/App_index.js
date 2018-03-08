import React from 'react';
import PropTypes from 'prop-types';

// Components
import Navbar from "./Navbar";
import Cover from "./Cover";
import Overview from "./Overview";
import Syllabus from "./Syllabus";


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
            </div>
        );
    }

}



App.propTypes = {
};

export default App;