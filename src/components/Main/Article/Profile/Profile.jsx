import React, { useState } from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import ProfileData from './ProfileData/ProfileData';
import cl from './Profile.module.scss';
import userPhoto from '../../../../assets/img/userAva.png';
import ProfileDataFormRedux from './ProfileDataForm/ProfileDataForm';

const Profile = (props) => {

    const [settingMode, setSettingMode] = useState(false);

    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    };

    const goToSettingMode = () => {
        setSettingMode(true);
    };

    const onSubmit = async (formData) => {
        await props.saveNewProfile(formData);
        setSettingMode(false);
    };

    return (
        <section className={cl.profile}>
            <div className={cl.avatarContainer}>
                <img
                    src={props.profile.photos.large !== null
                        ? props.profile.photos.large
                        : userPhoto}
                    className={cl.avatarImg}
                    alt="avatar"
                />
                {props.isOwner && (
                    <div className={cl.inputWrapper}>
                        <label className={cl.label}>
                            <input className={cl.inputMainPhoto} type='file' onChange={onMainPhotoSelected} />
                            Select a photo
                        </label>
                    </div>
                )}
            </div>
            <div className={cl.mainWrapper}>
                {settingMode
                    ? <ProfileDataFormRedux initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} goToSettingMode={goToSettingMode} />}
            </div>
        </section>
    );
};

export default Profile;


