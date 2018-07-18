import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch } from 'react-router-dom'

// Components
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import Overview from "./components/Overview";
import Syllabus from "./components/Syllabus";
import Pricing from "./components/Pricing";
import Team from "./components/Team";
import Bottom from "./components/Bottom";
import Materials from "./components/Materials";
import Solutions from "./components/Solutions";
import Privacy from "./components/Privacy";


class App extends React.Component {
    constructor() {
        super();
        this.state ={};
    }


    render() {
        return(
            <Switch>
                <Route path="/materials"
                       render={() => <Materials />} />
                <Route path="/solutions"
                       render={() => <Solutions />} />
                <Route path="/privacy-policy"
                       render={() => <Privacy />} />
                <Route render={() => <div className="flex-col fill" id="main-wrapper">
                    <Navbar />
                    <Cover />
                    <Overview />
                    <Syllabus/>
                    <Pricing />
                    <Team />
                    <Bottom />
                </div>} />
            </Switch>
        );
    }

}



App.propTypes = {
};

export default App;
