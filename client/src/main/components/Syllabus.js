import React from 'react';
import SessionItem from "../elements/SessionItem";

const Syllabus = ({}) => {


    return (
        <div className="section-wrapper flex-col" id="syllabus">
            <div className="heading">Syllabus</div>
            <div className="heading-description overview">
                <div>
                    We offer two course tracks. <strong>No prior coding knowledge/experience is required for either track.</strong>
                    &nbsp;However, the second more advanced track will move at a much faster pace during the last several
                    sessions, and will cover more difficult concepts. For reference, even just our Core Track covers most of what is taught
                    during an introductory computer science course at any given university.
                </div>
                <br/>
                <br/>
                <strong style={{color: '#424242'}}><u>Track 1: Core Track</u></strong>
                <br/>
                <div>
                    This track consists of 10 sessions detailed below. We cover the very basic and fundamental
                    computer science concepts/structures during the first half. We then quickly transition into
                    progressively more sophisticated and interesting concepts. This track is ideal for students who
                    are looking to explore computer science and develop a strong foundation to build on moving forward
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
                             title="Recursive Functions, Sorting"
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
                             title="Advanced Data structures, Big-O"
                             description=""/>
            </div>
            <div className="heading-description overview">
                <br/>
                <br/>
                <strong style={{color: '#424242'}}><u>Track 2: Advanced Track</u></strong>
                <div>
                    For the Advanced Track, we finish the 10 sessions from the Core Track described above,
                    then move quickly into more challenging concepts, which are covered in an additional set of 4 sessions.
                    This track also provides students with an introduction to <strong>full-stack web development</strong>,
                    which means students who follow this track will be able to build a website from scratch!
                    This track will move fast, so students must be prepared to put in the effort required to keep up.
                </div>
            </div>
            <div className="flex-row" style={{maxWidth: '1000px'}}>
                <SessionItem id="s11"
                             session="Session 11"
                             title="Graph Theory II: Graph Traversal Algorithms, Graph Properties and Phenomena"
                             description=""/>
                <SessionItem id="s12"
                             session="Session 12"
                             title="Web Servers I: Understanding Servers, HTTP, API end-points, and JSON"
                             description=""/>
                <SessionItem id="s13"
                             session="Session 13"
                             title="Web Servers II: Build a Server"
                             description=""/>
                <SessionItem id="s14"
                             session="Session 14"
                             title="Full Stack Web Development: Server + Frontend Using HTML/CSS, Site Hosting With Heroku"
                             description=""/>
            </div>
            <div className="heading-description overview">
                <br/>
                <br/>
                <strong style={{color: '#424242'}}><u>Track 3: Custom Track</u></strong>
                <div>
                    We also have the option of a custom track where we design a syllabus/lesson plan specifically for your
                    needs. This makes it possible for students to have a <strong>tailored learning experience</strong> that covers only material
                    relevant to their needs, and in a time frame that fits their summer schedule. For example, this track
                    is perfect for students who follow into one or more of the following categories:
                    <div style={{textAlign: '-webkit-auto', fontWeight: '700'}}>
                        <ul>
                            <li>You are only available for a small portion of the summer</li>
                            <li>You already know programming and want to have a few sessions that cover a specific topic in depth</li>
                            <li>You already know programming and want to do one of the above tracks, but skip the sessions
                                that cover the fundamentals</li>
                            <li>You want to work on a single project from start to finish, such as a personal website</li>
                        </ul>
                    </div>
                    Of course, there are a number of other reasons that you might opt to select the custom track. The examples above
                    are a just a few of the main reasons.
                </div>
            </div>
        </div>
    );


};

export default Syllabus;