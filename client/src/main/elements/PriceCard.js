import React from 'react';

const PriceCard = ({track, price, statement, details, style}) => {

    return (
        <div className="price-wrap shadow box" style={style}>
            <div className="heading-description" style={{maxWidth: '100%', color: '#616161'}}>
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