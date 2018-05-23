import React from 'react';
import PriceCard from "../elements/PriceCard";



const Pricing = ({}) => {

    return (
      <div className="section-wrapper flex-col" id="pricing">
          <div className="heading">Pricing</div>
          <div className="heading-description overview">
              Any students who attend just one session, will still have access to all of our videos, exercises, and
              Slack online community for discussions.
              <br />
              <br />
              <span style={{fontSize: '22px'}}><strong>We have three pricing options:</strong></span>
              <br />
          </div>
          <div className="flex-row">
              <PriceCard track={'Pay By Session'}
                         price={'$80 per session'}
                         description={<div>Take as many sessions as you want, and just pay for each one as you go</div>}/>
          </div>
          <div className="flex-row">
              <PriceCard track={'Core Concepts: 8 sessions'}
                         price={'$600 flat rate'}
                         details={<span>This package includes the 8 core concept sessions,
                             which will teach students the programming concepts taught in an
                             intro-level (i.e freshman year) college computer science course</span>}/>
              <PriceCard track={'Core Concepts + Web Development: 14 sessions'}
                         price={'$900 flat rate'}
                         style={{height: '352px'}}
                         details={<span>In addition to the 8 core concepts sessions, this package also includes
                             the 6 sessions covering <strong>full-stack web development</strong>.</span>}/>
              {/*<PriceCard track={'Core track'}*/}
                         {/*price={'$600'}*/}
                         {/*statement={<div className="left">You get:</div>}*/}
                         {/*details={<ul className="left">*/}
                                      {/*<li>The 10 sessions detailed above</li>*/}
                                      {/*<li>One-on-one tutor style learning for each session</li>*/}
                                      {/*<li>All of our instructional videos and comprehensive exercises</li>*/}
                                      {/*<li>Access to our Slack community of instructors and students*/}
                                          {/*for sharing resources, getting help, and continued learning</li>*/}
                                  {/*</ul>}/>*/}
              {/*<PriceCard track={'Advanced Track'}*/}
                         {/*price={'$900'}*/}
                         {/*statement={<div className="left">You get everything from Core <strong>+</strong></div>}*/}
                         {/*details={<ul className="left">*/}
                                     {/*<li>4 more fast-paced sessions that cover high level concepts and full stack web development</li>*/}
                                     {/*<li>Experience using Version Control Software (<a href="https://www.github.com/"*/}
                                                                                       {/*target="_blank">Github</a>)</li>*/}
                                     {/*<li>Practical knowledge of back-end web development in Python</li>*/}
                                     {/*<li>An introduction to front-end web development languages: HTML/CSS</li>*/}
                                     {/*<li>Ability to build a site from scratch and host it on <a href="https://www.heroku.com"*/}
                                                                                                {/*target="_blank">Heroku</a></li>*/}
                                 {/*</ul>}/>*/}
              {/*<PriceCard track={'Custom Track'}*/}
                         {/*price={'Variable'}*/}
                         {/*statement={<div className="left">You get:</div>}*/}
                         {/*details={<ul className="left">*/}
                                     {/*<li>A syllabus and lesson plan designed specifically for you!</li>*/}
                                     {/*<li>The ability to learn about whatever topics/tools you want</li>*/}
                                     {/*<li>One-on-one tutor style learning for each session</li>*/}
                                     {/*<li>Access to our Slack community of instructors and students*/}
                                         {/*for sharing resources, getting help, and continued learning</li>*/}
                                 {/*</ul>}/>*/}
          </div>
      </div>
    );

};

export default Pricing;