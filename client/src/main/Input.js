import React from 'react';

const Input = ({placeholder, width}) => {

    return(
        <input className="flat-input" placeholder={placeholder} style={{width: width}} />
    );

};

export default Input;