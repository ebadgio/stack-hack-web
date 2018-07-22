import React from 'react';
import path from 'path';

const Cover = ({}) => {

    return (
            <div className="cover-wrapper fill-light">
                <svg className="wide-scalene" preserveAspectRatio="none" viewBox=" 0 0 100 100">
                    <polygon fill="#424242" points="100 0 0 0 0 50" />
                </svg>
                {/*<div className="cover-photo-wrapper" id="landing">*/}
                    {/*/!*<img style={{display: 'none'}} src="https://s3.amazonaws.com/stack-hack-tutoring/emile-perron-190221-unsplash-smaller.jpg"/>*!/*/}
                    {/*/!*<img style={{display: 'none'}} src="https://s3.amazonaws.com/stack-hack-tutoring/emile-perron-190221-unsplash.jpg"/>*!/*/}
                    {/*/!*<img className="cover-photo"*!/*/}
                         {/*/!*src="https://s3.amazonaws.com/stack-hack-tutoring/artem-sapegin-176819-unsplash.jpg"/>*!/*/}
                {/*</div>*/}
                {/*<div className="cover-info-wrapper">*/}
                    {/*<img className="cover-info-logo" src="https://s3.amazonaws.com/stack-hack-tutoring/stack-hack-logo-4.svg"/>*/}
                    {/*<span className="cover-info-title">Stack Hack Tutoring</span
                >*/}
                {/*</div>*/}
                <div className="cover-info-wrapper flex-row" style={{alignItems: 'normal'}}>
                    <div className="cover-info box">
                        <div className="cover-info-title">Decode the Code with Stack Hack</div>
                        <div className="heading-description faint-text" >
                            A Python programming and Full-Stack Web Development course
                        </div>
                    </div>
                    <div style={{position: 'relative', height: '350px'}}>
                        <div className="shadow-heavy graphic-wrap">
                            <img src="https://s3.amazonaws.com/stack-hack-tutoring/coding-vector-light.svg"
                                 className="code-vector-graphic"/>
                        </div>
                        <div className="shadow-heavy graphic-wrap" id="dark-graphic">
                            <img src="https://s3.amazonaws.com/stack-hack-tutoring/coding-vector.svg"
                                 className="code-vector-graphic"/>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default Cover;
