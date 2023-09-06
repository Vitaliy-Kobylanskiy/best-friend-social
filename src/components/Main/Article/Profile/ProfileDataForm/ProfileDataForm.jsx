import React from 'react';
import { Field, reduxForm } from 'redux-form';
import cl from './ProfileDataForm.module.scss';

const ProfileDataForm = ({ profile, handleSubmit, error }) => {

    return (
        <form onSubmit={handleSubmit} className={cl.dataContainer}>
            <div className={cl.fieldWrapper}>
                <b>Full name: </b><Field className={cl.field} placeholder='Full name' type='text' name='fullName' component={'input'}></Field>
            </div>
            <div className={cl.fieldWrapper}>
                <b>About me: </b><Field className={cl.field} placeholder='Tell me about yourself' type='text' name='aboutMe' component={'textarea'}></Field>
            </div>
            <div className={cl.fieldWrapper}>
                <b>My skills: </b><Field className={cl.field} placeholder='Tell me about yourself' type='text' name='lookingForAJobDescription' component={'textarea'}></Field>
            </div>
            <div className={cl.fieldWrapper}>
                <b>Contacts: </b>{Object.keys(profile.contacts).map(key => {
                    return (
                        <div className={cl.contact} key={key}>
                            <b>{key}: </b> <Field className={cl.field} key={key} placeholder={key} name={'contacts.' + key} component={'input'}></Field>
                        </div>
                    )
                })}
            </div >
            {error && <p className={cl.formSummaryError}>{error}</p>}
            <div>
                <button className={cl.saveEditButton}>Save Edit</button>
            </div>
            <p>* contact fields must be valid</p>
            <p>for example https://facebook.com</p>
        </form >
    );
};

const ProfileDataFormRedux = reduxForm({
    form: 'newProfileForm'
})(ProfileDataForm)

export default ProfileDataFormRedux;
