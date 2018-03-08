import React from 'react';
import Profile from "./Profile";

const Team = ({}) => {
    return(
      <div className="section-wrapper">
          <div className="heading">Team</div>
          <div className="flex-row">
              <Profile image="https://s3.amazonaws.com/stack-hack-tutoring/eli-2.jpg"
                       job={<div>Software Engineering Intern at <a href="https://www.sap.com/" target="_blank">SAP</a></div>}
                       name="Eli Badgio"
                       description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                       college="Rice University"/>
              <Profile image=""
                       description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                       name="Simon Sheintoch"
                       college="University of Michigan"/>
          </div>
      </div>
    );
};

export default Team;
