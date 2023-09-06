import React from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';
import Chat from './Chat/Chat';
import cl from './DialogsList.module.scss';

const DialogsList = (props) => {

    let allDialogs = props.allDialogs;

    let dialogsElements = allDialogs.map(d => {
        return <Chat key={d.id} name={d.name} id={d.id} />;
    });

    return (
        <div className={cl.users}>
            {dialogsElements}
        </div>
    );
};

export default DialogsList;