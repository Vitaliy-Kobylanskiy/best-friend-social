import React from 'react';
import skipPrev from '../../../assets/img/skip-prev.svg';
import play from '../../../assets/img/play.svg';
import skipNext from '../../../assets/img/skip-next.svg';
import cl from './Multimedia.module.scss';

const Multimedia = () => {
    return (
        <div className={cl.multimedia}>
            <button className={cl.buttons}><img className={cl.imgButton} src={skipPrev} alt="prev" /></button>
            <button className={cl.buttons}><img className={cl.imgButton} src={play} alt="play" /></button>
            <button className={cl.buttons}><img className={cl.imgButton} src={skipNext} alt="next" /></button>
            <p className={cl.song}>Чути Гімн - Skofka</p>
        </div>
    );
};

export default Multimedia;