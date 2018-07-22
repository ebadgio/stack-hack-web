import React from 'react';

const Button = ({text, className, id, loading, clickFunc, style}) => {
    if (loading) {
        return <div className={"loading-btn " + className}
                    id={id}
                    style={style}>
            <div className="loader" style={{width: '27px', height: '27px'}}/>
        </div>
    }
    return(
        <div className={"btn " + className}
             id={id}
             onClick={() => clickFunc()}
             style={style}>
            <span>{text}</span>
        </div>
    );
};

export default Button;