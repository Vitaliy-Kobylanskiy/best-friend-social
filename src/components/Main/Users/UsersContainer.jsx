import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../../hoc/withAuthRedirect';
import {
    addFriend, deleteFriend,
    getUsersThunkAC, unfollowThunkAC, followThunkAC
} from '../../../redux/users-reducer';
import {
    getUsers, getCurrentPage, getFollowingInProgress,
    getIsFetching, getPageSize, getTotalUserCount
} from '../../../redux/users-selectors';
import UsersAPIContainer from './UsersAPIContainer';

const mapStateToProps = (state) => {

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        add: (userId) => {
            dispatch(addFriend(userId));
        },
        remove: (userId) => {
            dispatch(deleteFriend(userId));
        },
        getUsersThunk: (currentPage, pageSize, getUsersAPI) => {
            dispatch(getUsersThunkAC(currentPage, pageSize, getUsersAPI));
        },
        unfollowThunk: (userId, remoteFriend) => {
            dispatch(unfollowThunkAC(userId, remoteFriend));
        },
        followThunk: (userId, addNewFriend) => {
            dispatch(followThunkAC(userId, addNewFriend));
        }
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(UsersAPIContainer);

