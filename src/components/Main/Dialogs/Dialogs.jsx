import React from 'react';
import Input from './Input/Input';
import DialogsListContainer from './DialogsList/DialogsListContainer';
import MessageList from './MessageList/MessageList';
import cl from './Dialogs.module.scss';



const Dialogs = (props) => {

    return (
        <div className={cl.wrapper}>
            <Input />
            <div className={cl.contentWrapper}>
                <DialogsListContainer />
                <MessageList />
            </div>
        </div>
    );
};

export default Dialogs;