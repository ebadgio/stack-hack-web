import React from 'react';

const Scalene = ({fill, className}) => {
    return(
        <svg className={className} preserveAspectRatio="none" viewBox=" 0 0 100 100">
            <polygon fill={fill} points="100 0 0 0 0 50" />
        </svg>
    );
};

export default Scalene;