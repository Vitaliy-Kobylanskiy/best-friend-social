import React from 'react';
import headerLogo from '../../../assets/img/logo.avif';
import cl from './Logo.module.scss';

const Logo = () => {
    return (
        <div className={cl.block}>
            <div className={cl.wrapper}>
                <img className={cl.logo} src={headerLogo} alt="logo" />
                <h2 className={cl.title}>Best Friends</h2>
            </div>
        </div>
    );
};

export default Logo;