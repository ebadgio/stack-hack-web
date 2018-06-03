import React from 'react';

const MaterialItem = ({session, videos, exercises}) => {
    return(<div className="shadow flex-col box p-20 m-10" style={{maxWidth: '100%', minHeight: '300px'}}>
        <div className="card-heading" style={{color: '#536dfe'}}>{session}</div>
        <div className="material-item-description">
            <strong>Video(s):</strong>
                <div>
                    <ul>
                        {videos.map((vid, idx) => <li key={idx}>
                            <a href={vid} target="_blank">{vid}</a>
                        </li>)}
                    </ul>
                </div>
            <strong>In Class Exercise(s): </strong>
                <div>
                    <ul>
                        {exercises.map((ex, idx) => <li key={idx}>
                            <a href={ex} target="_blank">{ex}</a>
                        </li>)}
                    </ul>
                </div>
        </div>
    </div>);
};

export default MaterialItem;