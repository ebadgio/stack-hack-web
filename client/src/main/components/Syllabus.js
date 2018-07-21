import React from 'react';

// Elements
import SessionItem from "../elements/SessionItem";
import Scalene from "../elements/Scalene";

const Syllabus = ({}) => {


    return (
        <div className="section-wrapper flex-col fill-dark" id="syllabus">
            <Scalene fill={'#fff'} className={"wide-scalene"}/>
            <div className="heading white-text">Syllabus</div>
            <div className="heading-sub white-text" style={{margin: '20px auto 20px 40px'}}>CORE CONCEPTS</div>
            <div className="flex-row">
                <SessionItem id="s1"
                             session="Session 1"
                             title="Fundamentals I: Functions, Variables, Types, Conditional Logic"/>
                <SessionItem id="s2"
                             session="Session 2"
                             title="Fundamentals II: Lists, Tuples"/>
                <SessionItem id="s3"
                             session="Session 3"
                             title="Fundamentals III: For-loops, While-loops"/>
                <SessionItem id="s4"
                             session="Session 4"
                             title="Fundamentals IIII: Dictionaries, Sets"/>
                <SessionItem id="s5"
                             session="Session 5"
                             title="Iterable Methods, Lambdas"/>
                <SessionItem id="s6"
                             session="Session 6"
                             title="Recursive Functions, Sorting"/>
                <SessionItem id="s7"
                             session="Session 7"
                             title="Object-oriented Programming I"/>
                {/*<SessionItem id="s8"*/}
                             {/*session="Session 8"*/}
                             {/*title="Graphs Theory: Understanding Nodes and Edges, Adjacency Lists, Adjacency Matrices"/>*/}

                <SessionItem id="s8"
                             session="Session 8"
                             title="Object-oriented Programming II"/>
                {/*<SessionItem id="s10"*/}
                             {/*session="Session 10"*/}
                             {/*title="Big-O, Graph Traversal Algorithms"/>*/}
            </div>

            <div className="heading-sub white-text" style={{margin: '20px auto 20px 40px'}}>FULL STACK WEB DEVELOPMENT</div>
            <div className="flex-row">
                <SessionItem id="s9"
                             session="Session 9"
                             title="Version Control with Git, Github, Command-line tools"/>
                <SessionItem id="s10"
                             session="Session 10"
                             title="Understanding Web Servers, Routing, and Python Flask"/>
                <SessionItem id="s11"
                             session="Session 11"
                             title="Serving HTML files, CSS styling, Bootstrap"/>
                <SessionItem id="s12"
                             session="Session 12"
                             title="HTML templates using Flask, HTML forms, User input"/>
                <SessionItem id="s13"
                             session="Session 13"
                             title="Databases, User Accounts, API endpoints"/>
                <SessionItem id="s14"
                             session="Session 14"
                             title="Posting, Pagination, Deploying site to Heroku"/>
            </div>
        </div>
    );


};

export default Syllabus;