import React from 'react';

const SessionItem = ({top, session, title, id, description}) => {
    return (
      <div id={id} className="item-wrapper shadow frame">
          <div className="item-label"><strong><u>{session}</u></strong></div>
          <div className="item-title">{title}</div>
          {/*<div className="item-description">{description}</div>*/}
      </div>
    );
};

export default SessionItem;