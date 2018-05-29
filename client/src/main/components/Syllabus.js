import React from 'react';
import SessionItem from "../elements/SessionItem";

const Syllabus = ({}) => {


    return (
        <div className="section-wrapper flex-col" id="syllabus">
            <div className="heading">Syllabus</div>
            <div className="heading-description overview">
                <strong style={{color: '#424242'}}><u>Core Concepts</u></strong>
                <br/>
                <div>
                    The core programming concepts are covered in the 8 sessions detailed below. We begin with the very basic and fundamental
                    computer science concepts/structures. We then quickly transition into
                    progressively more sophisticated and interesting concepts. Our Core Concepts sessions cover most of the material
                    that a student learns during an intro-level college CS course.
                </div>
            </div>
            <div className="flex-row" style={{maxWidth: '1000px'}}>
                <SessionItem id="s1"
                             session="Session 1"
                             title="Fundamentals I: Functions, Expressions, Variables, Types"/>
                <SessionItem id="s2"
                             session="Session 2"
                             title="Fundamentals II: Conditional Logic, Modular Arithmetic"/>
                <SessionItem id="s3"
                             session="Session 3"
                             title="Fundamentals III: Strings, Lists, Tuples"/>
                <SessionItem id="s4"
                             session="Session 4"
                             title="Fundamentals IIII: For-loops, While-loops"/>
                <SessionItem id="s5"
                             session="Session 5"
                             title="Dictionaries, Sets, Nested Data Structures"/>
                <SessionItem id="s6"
                             session="Session 6"
                             title="Iterable Methods, Lambdas"/>
                <SessionItem id="s7"
                             session="Session 7"
                             title="Recursive Functions, Sorting"/>
                {/*<SessionItem id="s8"*/}
                             {/*session="Session 8"*/}
                             {/*title="Graphs Theory: Understanding Nodes and Edges, Adjacency Lists, Adjacency Matrices"/>*/}
                <SessionItem id="s8"
                             session="Session 8"
                             title="Object-oriented Programming"/>
                {/*<SessionItem id="s10"*/}
                             {/*session="Session 10"*/}
                             {/*title="Big-O, Graph Traversal Algorithms"/>*/}
            </div>
            <div className="heading-description overview">
                <br/>
                <br/>
                <strong style={{color: '#424242'}}><u>Web Development</u></strong>
                <div>
                    In the last six sessions, we provide students with an introduction to <strong>full-stack web development</strong>.
                    Students who complete these six courses will learn to build a full-fledged web application from scratch.
                    Students will be building a blogging site to apply the concepts as they learn them.
                </div>
            </div>
            <div className="flex-row" style={{maxWidth: '1000px'}}>
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
            {/*<div className="heading-description overview">*/}
                {/*<br/>*/}
                {/*<br/>*/}
                {/*<strong style={{color: '#424242'}}><u>Track 3: Custom Track</u></strong>*/}
                {/*<div>*/}
                    {/*We also have the option of a custom track where we design a syllabus/lesson plan specifically for your*/}
                    {/*needs. This makes it possible for students to have a <strong>tailored learning experience</strong> that covers only material*/}
                    {/*relevant to their needs, and in a time frame that fits their summer schedule. For example, this track*/}
                    {/*is perfect for students who follow into one or more of the following categories:*/}
                    {/*<div style={{textAlign: '-webkit-auto', fontWeight: '700'}}>*/}
                        {/*<ul>*/}
                            {/*<li>You are only available for a small portion of the summer</li>*/}
                            {/*<li>You already know programming and want to have a few sessions that cover a specific topic in depth</li>*/}
                            {/*<li>You already know programming and want to do one of the above tracks, but skip the sessions*/}
                                {/*that cover the fundamentals</li>*/}
                            {/*<li>You want to work on a single project from start to finish, such as a personal website</li>*/}
                        {/*</ul>*/}
                    {/*</div>*/}
                    {/*Of course, there are a number of other reasons that you might opt to select the custom track. The examples above*/}
                    {/*are a just a few of the main reasons.*/}
                {/*</div>*/}
            {/*</div>*/}
        </div>
    );


};

export default Syllabus;