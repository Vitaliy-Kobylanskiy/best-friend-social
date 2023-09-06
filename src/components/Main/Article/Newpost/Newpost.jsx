import React from 'react';
import cl from './Newpost.module.scss';

const Newpost = (props) => {
    return (
        <div className={cl.post}>
            <div className={cl.text}>{props.message}</div>
        </div>
    );
};

export default Newpost;