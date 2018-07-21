import React from 'react';

const SessionItem = ({top, session, title, id}) => {
    return (
      <div id={id} className="item-wrapper">
          <div className="item-label">{session}</div>
          <div className="item-title faint-text">{title}</div>
      </div>
    );
};

export default SessionItem;