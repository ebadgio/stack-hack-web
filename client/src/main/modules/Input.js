import React from 'react';

const Input = ({placeholder, id, width}) => {

    return(
        <input id={id} className="flat-input" placeholder={placeholder} style={{width: width}} />
    );

};

export default Input;