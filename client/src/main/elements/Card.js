import React from 'react';

const Card = ({icon, header, description, type}) => {

    return (
        <div className={"card-outer " + type}>
            <div className="card-icon-wrapper">{icon ? icon : ''}</div>
            <div className="card-heading center-text">{header ? header: ''}</div>
            <div className="card-description center-text">
                {description ? description : ''}
            </div>
        </div>
    );
};

export default Card;