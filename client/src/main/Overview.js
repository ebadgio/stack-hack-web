import React from 'react';
import Card from "./Card";

const Overview = ({}) => {

    return (
        <div className="overview-wrapper">
            <div className="heading">Overview</div>
            <div className="heading-description overview">
                Stack Hack combines the personalized and flexible aspect of tutoring services
                with the structure and organization of a full computer science course. We begin with coding fundamentals
                and progress quickly onto more sophisticated concepts such as recursion, object-oriented programming, and
                graph theory. The language we will be working in is{' '}
                <a href="https://www.python.org/" target="_blank">
                    <strong id="python">Python</strong>
                </a> (see why below).
            </div>
            <div className="heading" style={{marginTop: '60px'}}>What You'll Get</div>
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
            <div className="heading" style={{marginTop: '60px'}}>Why Python?</div>
            <div className="overview-python">
                <div id="py-img-wrapper"><img src="https://s3.amazonaws.com/stack-hack-tutoring/python.png" id="py-img"/></div>
                <div className="heading-description python">Python is a powerful and versatile language that can be used for just
                about anything: data analysis, web servers, game development, machine learning, and more. In fact it's one
                of the official programming languages used at Google.</div>
                <div className="heading-description python">Python is also the first programming language
                    taught to students at many of the top computer science departments in the country such
                    as Stanford University, MIT University, and Rice University. Python code reads very much like English, so
                    students don't needlessly get bogged down in complicated syntax. This allows our learning to be focused on
                    thinking in a computational way.</div>
            </div>
        </div>
    );
};

export default Overview;