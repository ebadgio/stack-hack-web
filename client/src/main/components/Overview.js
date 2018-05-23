import React from 'react';
import Card from "../elements/Card";

const Overview = ({}) => {

    return (
        <div className="section-wrapper flex-col" id="overview">
            <div className="heading">Overview</div>
            <div className="heading-description overview">
                Stack Hack combines the personalized and flexible aspect of tutoring services
                with the structure and organization of a full computer science course. We begin with the fundamentals of programming
                and progress quickly onto more sophisticated concepts such as recursion and object-oriented programming
                and then for the remained of the course we learn full stack web development. The language we will be working in is{' '}
                <a href="https://www.python.org/" target="_blank">
                    <strong>Python</strong>
                </a>.
            </div>
            <div className="heading" style={{marginTop: '60px'}}>What You'll Get</div>
            <div className="flex-row">
                <Card header="VIDEOS"
                      icon={<div>
                                <i className="fas fa-video user-icons offset" />
                                <i className="fab fa-youtube user-icons" />
                            </div>}
                      description={<div>Our students will have unlimited access to videos and exercises created for every
                          topic covered in this course.
                          {/*These videos will improve learning by providing the students the*/}
                          {/*opportunity to both prepare for, as well as reinforce, what they have learned in each session.*/}
                      </div>}/>
                <Card header="WEB DEVELOPMENT"
                      icon={<div>
                          <i className="fas fa-laptop screen-icons offset" />
                          <i className="fas fa-mobile screen-icons" />
                      </div>}
                      description={<div>After learning the core programming concepts, we move on to full-stack web development.
                          {/*Our backend work will be in Python and we will learn to work with frontend languages HTML and CSS.*/}
                          Students who complete the course will have built a fully functional blogging site.</div>}/>
                <Card header="COMMUNITY"
                      icon={<i className="fab fa-slack slack-icon"/>}
                      description={<div>
                          Connection with peers facilitates learning. At Stack Hack we use a tool called
                          {' '}<a href="https://slack.com/" target="_blank"><strong>Slack</strong></a> to create
                          a platform for our students to discuss and share what they have learned.</div>}/>
                <Card header="FLEXIBILITY"
                      icon={<i id="cubes" className="fas fa-cubes base-icons" />}
                      // description={<div>
                      //     We want to make this as easy and convenient as possible for every student. We have designed the Stack Hack program
                      //     so that students can begin sessions at any point in the summer they want, and come to sessions during the weeks
                      //     where they have the time.</div>}
                      description={<div>We designed Stack Hack so that students can begin course sessions at any point in the summer they want, and come to sessions during the weeks
                          where they have the time.</div>}/>
                <Card header="STRATEGY"
                      icon={<i id="gears" className="fas fa-cogs base-icons" />}
                      description={<div>We teach students to think the right way while developing,
                          which means learning to reason in a computational way and building good design strategies.</div>}/>
            </div>
            <div className="heading" style={{marginTop: '60px'}}>How It Works</div>
            <div className="heading-description overview">
                    <strong>No prior coding knowledge/experience is required!</strong>
                    <br />
                    <br />
                    We follow the <strong>flipped classroom model</strong>. This means that before each session students will be asked
                    to watch 1 or 2 videos and complete a small set of exercises, and then during the sessions we start
                    by answering any questions the students have. After answering questions, students will work on more
                    difficult exercises covering the material they learned in the videos. As the students work, we (the instructors)
                    will be moving from student to student to provide one-on-one assistance when needed.
                    <br />
                    <div id="img-cont" className="flex-row">
                        <div id="c-1">
                            <img className="c-img"
                                 src="https://s3.amazonaws.com/stack-hack-tutoring/taras-shypka-424928-unsplash.jpg" />
                        </div>
                        <div id="c-2">
                            <img className="c-img"
                                 src="https://s3.amazonaws.com/stack-hack-tutoring/annie-spratt-608001-unsplash.jpg"/>
                        </div>
                    </div>
                    We will hold two sessions per week:
                    <br />
                    <br />
                    <strong>Sundays: 4-5pm</strong>
                    <br />
                    <strong>Tuesdays: 8-9pm</strong>
                    <br />
                    <br />
                    Our first session will be on Sunday June 3rd, and they will continue throughout the summer
                    until the end of August! Students can pay by the session or by packages of sessions,
                    which we describe in the syllabus and pricing sections below.
            </div>
            <div className="heading" style={{marginTop: '60px'}}>Why Python?</div>
            <div className="overview-python flex-col">
                <div style={{marginBottom: '30px'}}>
                    <div className="frame shadow" id="py-img-wrapper"><img src="https://s3.amazonaws.com/stack-hack-tutoring/python.png" id="py-img"/></div>
                    <div className="heading-description python">Python is a powerful and versatile language that can be used for just
                    about anything: data analysis, web servers, game development, machine learning, and more. In fact, it's one
                        of the official programming languages used at <i>Google</i>.</div>
                </div>
                <div className="flex-row">
                    <div className="heading-description python">Python is also the first programming language
                        taught to computer science students at many of the top universities in the country such
                        as <i>Stanford University</i>, <i>MIT University</i>, <i>Carnegie Mellon</i>, <i>Rice University</i>, and many more. This is because the
                        Python code reads very much like English, so
                        students don't needlessly get bogged down in complicated syntax, which allows the focus to be on
                        <strong> learning to think and reason in a computational way.</strong></div>
                </div>
                <div className="frame code-wrap shadow">
                    <code>
                        <i className="e-blue">def</i> <span className="e-green">compute_squares</span>(<i className="e-orange">numbers</i>):
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;result = []
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<i className="e-blue">for</i> num <i className="e-blue">in</i> <i className="e-orange">numbers</i>:
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;squared = num <span className="e-red">**</span> <span className="e-purple">2</span>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result.append(squared)
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<i className="e-blue">return</i> result
                    </code>
                </div>
                <div className="text-caption" style={{maxWidth: '320px'}}>
                    Above is an example of some very basic Python code. It takes in a list of a numbers, and returns a
                    list of those numbers squared:
                    <br/>
                    [ 1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]
                    <br/>
                    As you can see, the language is very readable.
                </div>

            </div>
        </div>
    );
};

export default Overview;