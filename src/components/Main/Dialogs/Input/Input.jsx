import React from 'react';
import cl from './Input.module.scss';

const Input = () => {
    return (
        <div className={cl.inputWrapper}>
            <input className={cl.input} placeholder='Search' type="text" />
        </div>
    );
};

export default Input;