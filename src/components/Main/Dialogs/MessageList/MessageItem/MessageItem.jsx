import React from 'react';
import cl from './MessageItem.module.scss';

const MessageItem = (props) => {

    return (
        <div className={cl.messageItem}>{props.text}</div>
    );
};

export default MessageItem;