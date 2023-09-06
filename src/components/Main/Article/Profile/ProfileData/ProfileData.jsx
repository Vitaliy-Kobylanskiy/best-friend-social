import React from 'react';

import cl from './ProfileData.module.scss';

const ProfileData = ({ profile, isOwner, goToSettingMode }) => {

    return (
        <div className={cl.dataContainer}>
            <div>
                <b><span className={cl.dataTitle}>Full name: </span></b><span className={cl.dataDescription}>{profile.fullName}</span>
            </div>
            <div>
                <b><span className={cl.dataTitle}>About me: </span></b><span className={cl.dataDescription}>{profile.aboutMe}</span>
            </div>
            <div>
                <b><span className={cl.dataTitle}>My skills: </span></b><span className={cl.dataDescription}>{profile.lookingForAJobDescription}</span>
            </div>
            <div className={cl.contactsWrapper}>
                <b><span className={cl.dataTitle}>Contacts: </span></b><span>{Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}</span>
            </div>
            {isOwner &&
                <div className={cl.editButtonWrapper}>
                    <button className={cl.editButton} onClick={goToSettingMode}>Edit</button>
                </div>
            }
        </div>
    );
};

export default ProfileData;

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={cl.contact}><b>{contactTitle}</b>: {contactValue}</div>
    )
}