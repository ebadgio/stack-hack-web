import React from 'react';

const TextArea = ({placeholder, width, rows, id, style}) => {

    return(
        <textarea className="flat-textarea" rows={rows} id={id} placeholder={placeholder} style={{width: width}} />
    );

};

export default TextArea;