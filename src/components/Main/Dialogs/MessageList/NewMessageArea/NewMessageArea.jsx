import React from 'react';
import cl from './NewMessageArea.module.scss';
import MessageItem from '../MessageItem/MessageItem';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../../../utils/validators/validators';


const maxLength300 = maxLengthCreator(300);

const NewMessageArea = (props) => {

    const onSubmit = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    let messageElements = props.allMessages.map(m => {
        return <MessageItem key={m.id} text={m.message} id={m.id} />;
    });

    return (
        <div className={cl.areaWrapper}>
            <div className={cl.elementsWrapper}>{messageElements}</div>
            <MessageFormRedux onSubmit={onSubmit} />
        </div>
    );
};

const MessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={cl.form}>
            <Field component={'textarea'}
                name={'newMessageBody'}
                className={cl.textarea}
                placeholder='Enter your message'
                validate={[required, maxLength300]} />
            <button className={cl.button}>Send</button>
        </form>
    );
};

const MessageFormRedux = reduxForm({
    form: 'addNewMessageForm'
})(MessageForm)


export default NewMessageArea;