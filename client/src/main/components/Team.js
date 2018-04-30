import React from 'react';
import Profile from "../elements/Profile";

const Team = ({}) => {
    return(
      <div className="section-wrapper flex-col" id="team">
          <div className="heading">Team</div>
          <div className="heading-description overview">
              Our team consists of Lower Merion High School graduates who have taken up computer science while in college.
              We feel that tech has a really small presence in the Lower Merion School District, so in an effort to fix that,
              we created Stack Hack, hoping to introduce more students around Lower Merion to Computer Science as early
              in their education as possible.
          </div>
          <div className="flex-row" style={{alignItems: 'baseline', marginTop: '20px'}}>
              <Profile image="https://s3.amazonaws.com/stack-hack-tutoring/eli-2.jpg"
                       job={<div>Software Engineering Intern at <a href="https://www.sap.com/" target="_blank">SAP</a></div>}
                       name="Eli Badgio"
                       description={<div>Rising Senior at Rice University, pursuing a double major in Computer
                           Science and Cognitive Science. I have a passion for product development, so my spare time is
                           spent building web and mobile applications with my roommate. Two of our current projects are a
                           live-messaging/thread-based social media app, as well as an Airbnb style app with a focus on cheap,
                           shared living. I also play Ultimate Frisbee for Cloud9, the club team at Rice.</div>}
                       id="eli-pic"
                       college="Rice University"/>
              <Profile image="https://s3.amazonaws.com/stack-hack-tutoring/180429-Simon-0012RT.jpg"
                       description={<div>Rising Junior at the University of Michigan where I am  pursuing a Computer Science
                           major with a Political Science minor. In my spare time, I use my coding skills to build
                           predictive models for sports analytics. In one of my favorite projects, my team and I analyzed
                           data from the Michigan Field Hockey team in order to provide feedback regarding injury prevention.
                           I also play and coach tennis regularly.</div>}
                       name="Simon Sheintoch"
                       id="simon-pic"
                       college="University of Michigan"/>
          </div>
      </div>
    );
};

export default Team;
