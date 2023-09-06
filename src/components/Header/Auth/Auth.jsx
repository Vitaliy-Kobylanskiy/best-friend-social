import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './Auth.module.scss';

const Auth = (props) => {


    return (
        <div className={cl.authBlock}>
            {props.isAuth
                ? <div>
                    {props.profile && props.profile.fullName
                        ? <p className={cl.authLogin}>{props.profile.fullName}</p>
                        : null
                    }
                    <button onClick={props.handleLogoutClick} className={cl.logoutBtn}>Log out</button>
                </div>
                : <NavLink className={cl.login} to={'/login/'}>Login</NavLink>}
        </div>
    );
};

export default Auth;