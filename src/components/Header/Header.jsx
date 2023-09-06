import React from 'react';
import Logo from './Logo/Logo';
import Multimedia from './Multimedia/Multimedia';
import AuthContainer from './Auth/AuthContainer';
import cl from './Header.module.scss';


const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.container}>
                <Logo />
                <Multimedia />
                <AuthContainer />
            </div>
        </header>
    );
};

export default Header;