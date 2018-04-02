import React from 'react';
import Card from "../elements/Card";

const Overview = ({}) => {

    return (
        <div className="section-wrapper flex-col" id="overview">
            <div className="heading">Overview</div>
            <div className="heading-description overview">
                Stack Hack combines the personalized and flexible aspect of tutoring services
                with the structure and organization of a full computer science course. We begin with the coding fundamentals
                and progress quickly onto more sophisticated concepts such as recursion, object-oriented programming, and
                graph theory. The language we will be working in is{' '}
                <a href="https://www.python.org/" target="_blank">
                    <strong>Python</strong>
                </a> (see why below).
            </div>
            <div className="heading" style={{marginTop: '60px'}}>What You'll Get</div>
            <div className="flex-row">
                <Card header="ONE-ON-ONE"
                      icon={<div>
                                <i className="fas fa-user user-icons offset" />
                                <i className="far fa-user user-icons" />
                            </div>}
                      description="Our tutor style teaching provides students with a one-on-one learning environment, which allows each student to move at their own pace and get the most out each and session and the course as a whole. "/>
                <Card header="VIDEOS"
                      icon={<div>
                                <i className="fas fa-laptop screen-icons offset" />
                                <i className="fas fa-mobile screen-icons" />
                            </div>}
                      description="We have instructional videos made for each topic, so that our students are able to obtain an introduction to the material before each session. Along with each video we provide a few exercises for the students to attempt on their own, and reinforce what they just learned."/>
                <Card header="COMMUNITY"
                      icon={<i className="fab fa-slack slack-icon"/>}
                      description={<div>A key component of learning is to discuss, share, and continually refine what you have learned with your peers. To capture this aspect of learning we use a popular tool called <a href="https://slack.com/" target="_blank"><strong>Slack</strong></a> to gather all our students in one place and cultivate a strong community online.</div>}/>
                <Card header="FLEXIBILITY"
                      icon={<i id="cubes" className="fas fa-cubes base-icons" />}
                      description={<div>As part of our tutor-style teaching, <strong>we come to you!</strong> We want to make this as easy and convenient as possible for every student, so we come to you at a time of your choosing. We can come once, twice, or even three times a week, if that's what it takes for you to fit us into your summer plans.</div>}/>
                <Card header="STRATEGY"
                      icon={<i id="gears" className="fas fa-cogs base-icons" />}
                      description={<div>We teach students to think the right way while developing, which means learning to reason in a computational way and building good design strategies. This will make it easy for our students to keep learning and building even after the course is finished!</div>}/>
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