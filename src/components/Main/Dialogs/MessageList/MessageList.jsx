import React from 'react';
import NewMessageAreaContainer from './NewMessageArea/NewMessageAreaContainer';
import cl from './MessageList.module.scss';


const MessageList = () => {

    return (
        <div className={cl.messages}>
            <NewMessageAreaContainer />
        </div>
    );
};

export default MessageList;