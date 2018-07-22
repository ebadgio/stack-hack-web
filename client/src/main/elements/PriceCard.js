import React from 'react';

// Elements
import Separator from "./Separator";

const PriceCard = ({option, price, details, style}) => {

    return (
        <div className="price-wrap box" style={style}>
            <div className="heading-sub dark-grey-text mb-5">{option}</div>
            <div className="heading-sub-two mb-5" style={{color: '#3884FF'}}>Price : {price}</div>
            <div className="heading-description grey-text mb-10" style={{textAlign: 'left'}}>{details}</div>
            <Separator width="150px" color="#1de9b6"/>
        </div>
    );
};

export default PriceCard;