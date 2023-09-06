import React from 'react';
import bgImg from '../../../assets/img/bg.jpg';
import cl from './Background.module.scss';

const Backgrond = () => {
    return (
        <div className={cl.backgroud}>
            <img className={cl.backgroudImg} src={bgImg} alt="bg" />
        </div>
    );
};

export default Backgrond;