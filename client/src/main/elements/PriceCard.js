import React from 'react';

const PriceCard = ({track, price, statement, details}) => {

    return (
        <div className="price-wrap shadow">
            <div className="heading-description overview" style={{maxWidth: '100%'}}>
                <strong style={{fontSize: '24px', color: '#424242'}}>{track}</strong>
                <br />
                <br />
                <div style={{color: '#536dfe'}}><strong>Price</strong>: {price}</div>
                <br />
                {statement}
                {details}
            </div>
        </div>
    );
};

export default PriceCard;