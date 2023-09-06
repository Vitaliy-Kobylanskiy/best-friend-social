import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom/cjs/react-router-dom';
import cl from './Aside.module.scss';

const Aside = () => {
    const isAuth = useSelector(state => state.auth.isAuth);

    if (isAuth === false) {
        return <Redirect to={'/login/'} />;
    }

    return (
        <aside className={cl.aside}>
            <nav className={cl.nav}>
                <ul className={cl.list}>
                    <li className={cl.items}><NavLink className={cl.links} to="/profile/">Profile</NavLink></li>
                    <li className={cl.items}><NavLink className={cl.links} to="/dialogs/">Messages</NavLink></li>
                    <li className={cl.items}><NavLink className={cl.links} to="/users/">Add Friends</NavLink></li>
                    <li className={cl.items}><a className={cl.links} href="#">Music</a>
                        <span className={cl.noActive}> (no active yet)</span></li>
                    <li className={cl.items}><a className={cl.links} href="#">News</a>
                        <span className={cl.noActive}> (no active yet)</span></li>
                    <li className={cl.items}><a className={cl.links} href="#">Settings</a>
                        <span className={cl.noActive}> (no active yet)</span></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;