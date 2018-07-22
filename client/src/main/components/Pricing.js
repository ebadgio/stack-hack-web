import React from 'react';
import PriceCard from "../elements/PriceCard";



const Pricing = ({}) => {

    return (
      <div className="section-wrapper flex-col" id="pricing">
          <div className="heading">Pricing</div>
          <div className="heading-description overview center-text">
              Any students who attend just one session, will still have access to all of our videos, exercises, and
              Slack online community for discussions.
              <br />
              <br />
              <span style={{fontSize: '22px'}}><strong>We have the following pricing options:</strong></span>
              <br />
          </div>

          <div className="flex-row">
              <PriceCard option={'Pay By Session'}
                         price={'$60 per session'}
                         details={<div>Take as many sessions as you want, and just pay for each one as you go.</div>}/>
              <PriceCard option={'Core Concepts: 8 sessions'}
                         price={'$450 flat rate'}
                         details={<span>This package includes all the core concepts sessions.</span>}/>
              <PriceCard option={'Web Dev: 6 sessions'}
                         price={'$350 flat rate'}
                         details={<span>This option is designed for students that already have experience programming,
                             but want to build practical skills in full-stack web development.</span>}/>
              <PriceCard option={'Core Concepts + Web Dev: 14 sessions'}
                         price={'$750 flat rate'}
                         details={<span>This package includes the core concepts sessions and full-stack web development
                             sessions for a total of fourteen sessions.</span>}
              />
          </div>
      </div>
    );

};

export default Pricing;