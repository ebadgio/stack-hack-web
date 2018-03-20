import React from 'react';

const Button = ({text, id, loading, clickFunc}) => {
    return(
        <div className={loading ? "loading-btn primary" : "btn primary"} id={id} onClick={() => clickFunc()}>
            {loading ? <div className="loader" style={{width: '27px', height: '27px'}}/> : <span>{text}</span>}
        </div>
    );
};

export default Button;