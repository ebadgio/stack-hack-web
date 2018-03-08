import React from 'react';
import SessionItem from "./SessionItem";

const Syllabus = ({}) => {


    return (
        <div className="section-wrapper flex-col">
            <div className="heading">Syllabus</div>
            <div className="heading-description overview">
                <div>
                    We offer our two tracks. <strong>No prior coding knowledge/experience is required for either track.</strong>
                    &nbsp;However, the second more advanced track will move at a much faster pace during the last several
                    sessions, and will cover more difficult concepts.
                </div>
                <br/>
                <br/>
                <strong><u>Track 1: Core Track</u></strong>
                <br/>
                <div>
                    This track consists of 10 sessions detailed below. We cover the very basic and fundamental
                    computer science concepts/structures during the first half. We then quickly transition into
                    progressively more sophisticated and interesting concepts. This track is ideal for students who
                    are looking to explore computer science and build a strong foundation to build on moving forward
                    in their education.
                </div>
            </div>
            <div className="flex-row" style={{maxWidth: '1000px'}}>
                <SessionItem id="s1"
                             session="Session 1"
                             title="Fundamentals I: Functions, Expressions, Variables, Types"
                             description=""/>
                <SessionItem id="s2"
                             session="Session 2"
                             title="Fundamentals II: Conditional Logic, Modular Arithmetic"
                             description=""/>
                <SessionItem id="s3"
                             session="Session 3"
                             title="Fundamentals III: Strings, Lists, Tuples"
                             description=""/>
                <SessionItem id="s4"
                             session="Session 4"
                             title="Fundamentals IIII: For-loops, While-loops"
                             description=""/>
                <SessionItem id="s5"
                             session="Session 5"
                             title="Dictionaries, Sets, Nested Data Structures"
                             description=""/>
                <SessionItem id="s6"
                             session="Session 6"
                             title="Sequence Methods, Lambdas, Random Variables"
                             description=""/>
                <SessionItem id="s7"
                             session="Session 7"
                             title="Recursive Functions"
                             description=""/>
                <SessionItem id="s8"
                             session="Session 8"
                             title="Graphs Theory I: Understanding Nodes and Edges, Adjacency Lists, Adjacency Matrices"
                             description=""/>
                <SessionItem id="s9"
                             session="Session 9"
                             title="Object-oriented Programming"
                             description=""/>
                <SessionItem id="s10"
                             session="Session 10"
                             title="Advanced Data structures, Sorting, Big-O"
                             description=""/>
            </div>
            <div className="heading-description overview">
                <br/>
                <br/>
                <strong><u>Track 2: Advanced Track</u></strong>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
            <div className="flex-row" style={{maxWidth: '1000px'}}>
                <SessionItem id="s11"
                             session="Session 11"
                             title="Graph Theory II: Graph Traversal Algorithms, Graph Properties and Phenomena"
                             description=""/>
                <SessionItem id="s12"
                             session="Session 12"
                             title="Something Here"
                             description=""/>
                <SessionItem id="s13"
                             session="Session 13"
                             title="And Another Bit Here"
                             description=""/>
                <SessionItem id="s14"
                             session="Session 14"
                             title="With A Fourth"
                             description=""/>
            </div>

        </div>
    );


};

export default Syllabus;