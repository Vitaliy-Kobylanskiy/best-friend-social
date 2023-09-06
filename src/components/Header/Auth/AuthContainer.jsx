import React from 'react';
import Auth from './Auth';
import { connect } from 'react-redux';
import { authMeThunkAC, logoutThunkAC } from '../../../redux/auth-reducer';
import { authMeAPI, logoutApi } from '../../../api/api';


class AuthContainer extends React.Component {

    componentDidMount() {
        this.props.authMeThunk(authMeAPI);
    }

    handleLogoutClick = () => {
        this.props.logoutThunk(logoutApi);
    }

    render() {
        return (
            <Auth {...this.props} handleLogoutClick={this.handleLogoutClick} />
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.profilePage.profile
});

const mapDispatchToProps = (dispatch) => {
    return {
        authMeThunk: (authMeAPI) => {
            dispatch(authMeThunkAC(authMeAPI));
        },
        logoutThunk: (logoutApi) => {
            dispatch(logoutThunkAC(logoutApi));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);