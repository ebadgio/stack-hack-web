import React from 'react';

const Separator = ({orientation, width, color}) => {

    const style = {backgroundColor: color};

    return (
        <div className="separator-wrapper" style={{width: width}}>
            <div className="separator-dot" style={style}/>
            <div className="separator-dot" style={style}/>
            <div className="separator-line" style={style}/>
        </div>
    );
};

export default Separator;