import React from 'react';

const Card = ({icon, header, description}) => {

    return (
        <div className="card-outer shadow">
            <div className="card-icon-wrapper">{icon ? icon : ''}</div>
            <div className="card-heading">{header ? header: ''}</div>
            <div className="card-description">{description ? description : ''}</div>
        </div>
    );
};

export default Card;