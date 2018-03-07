import React from 'react';
import Card from "./Card";

const Overview = ({}) => {

    return (
        <div className="overview-wrapper">
            {/*<div className="heading">OVERVIEW</div>*/}
            <div className="overview-card-holder">
                <Card header="ONE-ON-ONE"
                      icon={<div>
                                <i className="fas fa-user user-icons offset" />
                                <i className="far fa-user user-icons" />
                            </div>}
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <Card header="VIDEOS"
                      icon={<div>
                                <i className="fas fa-laptop screen-icons offset" />
                                <i class="fas fa-mobile screen-icons" />
                            </div>}
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."/>
                <Card header="COMMUNITY" icon={<i className="fab fa-slack slack-icon"/>} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."/>
            </div>
        </div>
    );
};

export default Overview;