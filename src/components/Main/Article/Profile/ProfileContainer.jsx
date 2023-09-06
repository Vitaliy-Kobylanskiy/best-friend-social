import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
    setUserProfile, getProfileThunkAC, savePhoto, saveNewProfile
} from '../../../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { getProfileAPI } from '../../../../api/api';
import withAuthRedirect from '../../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        getProfileAPI(userId, this.props.setUserProfile)
            .then(response => {
                this.props.setUserProfile(response.data);
            });

        getProfileThunkAC(userId, this.props.setUserProfile, getProfileAPI);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props} isOwner={!this.props.match.params.userId} />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

const mapDispatchToProps = (dispatch) => {

    return {
        setUserProfile: (userId) => {
            dispatch(setUserProfile(userId));
        },
        getProfileThunkAC: (userId, getProfileAPI) => {
            dispatch(getProfileThunkAC(userId, getProfileAPI));
        },
        savePhoto: (file) => {
            dispatch(savePhoto(file));
        },
        saveNewProfile: (profile) => {
            dispatch(saveNewProfile(profile))
        }
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer);