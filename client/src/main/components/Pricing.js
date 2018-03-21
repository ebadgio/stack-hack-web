import React from 'react';

const Pricing = ({}) => {

    return (
      <div className="section-wrapper flex-col">
          <div className="heading">Pricing</div>
          <div className="flex-row">
              <div className="price-wrap shadow">
                  <div className="heading-description overview" style={{maxWidth: '100%'}}>
                      <strong style={{fontSize: '24px', color: '#424242'}}>Core Track</strong>
                      <br />
                      <br />
                      <strong>Price</strong>: $600
                      <br />
                      <br />
                      <div className="left">You get:</div>
                      <ul className="left">
                          <li>The 10 sessions detailed above</li>
                          <li>One-on-one tutor style learning for each session</li>
                          <li>All of our instructional videos and comprehensive exercises</li>
                          <li>Access to our Slack community of instructors and students for sharing resources, getting help, and continued learning</li>
                      </ul>

                  </div>
              </div>
              <div className="price-wrap shadow">
                  <div className="heading-description overview" style={{maxWidth: '100%'}}>
                      <strong style={{fontSize: '24px', color: '#424242'}}>Advanced Track</strong>
                      <br />
                      <br />
                      <strong>Price</strong>: $900
                      <br />
                      <br />
                      <div className="left">You get everything in Core <strong>+</strong></div>
                      <ul className="left">
                          <li>4 more fast-paced sessions that cover high level concepts and full stack web development</li>
                          <li>Experience using Version Control Software (<a href="https://www.github.com/"
                                                                            target="_blank">Github</a>)</li>
                          <li>Practical knowledge of back-end web development in Python</li>
                          <li>An introduction to front-end web development languages: HTML/CSS</li>
                          <li>Ability to build a site from scratch and host it on <a href="https://www.heroku.com"
                                                                             target="_blank">Heroku</a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    );

};

export default Pricing;