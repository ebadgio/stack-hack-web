import React from 'react';
import Profile from "../elements/Profile";

const Team = ({}) => {
    return(
      <div className="section-wrapper">
          <div className="heading">Team</div>
          <div className="flex-row" style={{alignItems: 'baseline'}}>
              <Profile image="https://s3.amazonaws.com/stack-hack-tutoring/eli-2.jpg"
                       job={<div>Software Engineering Intern at <a href="https://www.sap.com/" target="_blank">SAP</a></div>}
                       name="Eli Badgio"
                       description={"I am a rising Senior at Rice University, pursuing a double major in Computer Science and Cognitive Science. I have a passion for product development, so my spare time is spent building web and mobile applications with my roommate. Two of our current projects are a live-messaging/thread-based social media app, as well as an Airbnb style app with a focus on cheap, shared living. I also play Ultimate Frisbee for Cloud9, the club team at Rice."}
                       college="Rice University"/>
              <Profile image="https://s3.amazonaws.com/stack-hack-tutoring/IMG_6068.jpg"
                       description={"I am a rising Junior at the" +
                       " University of Michigan where I am  pursuing a Computer" +
                       " Science major with a Political Science minor." +
                       " In my spare time, I use my coding skills to build predictive models for sports analytics." +
                       " In one of my favorite projects, my team and I analyzed data from the Michigan Field Hockey team in order to provide feedback regarding injury prevention." +
                       " I also play and coach tennis regularly."}
                       name="Simon Sheintoch"
                       college="University of Michigan"/>
          </div>
      </div>
    );
};

export default Team;