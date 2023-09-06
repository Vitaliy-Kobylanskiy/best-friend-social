import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './Chat.module.scss';

const Chat = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <NavLink to={path} className={cl.userItem}>{props.name}</NavLink>
    );
};

export default Chat;