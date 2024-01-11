import React from 'react';
import liveDemoStyles from './LiveDemo.module.css';

const LiveDemo = (props) => {
    console.log(props);
    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <iframe src={props.data.liveDemo1} className={liveDemoStyles.iframe} title="Live Demo"></iframe>
                </div>
            </div>
        </>
    );
};

export default LiveDemo;
