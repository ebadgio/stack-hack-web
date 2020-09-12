import React from 'react';

const Button = ({text, className, id, loading, clickFunc, style, icon}) => {
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
            {icon && <i className={icon}/>}
            <span>{text}</span>
        </div>
    );
};

export default Button;