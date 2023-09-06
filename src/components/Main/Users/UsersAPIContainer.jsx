import React from 'react';
import Users from './Users';
import { getUsersAPI } from '../../../api/api';
import Preloader from '../../common/Preloader/Preloader';


class UsersAPIContainer extends React.Component {

    componentDidMount() {

        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize, getUsersAPI);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize, getUsersAPI);
    }

    render() {
        return <>
            {/* {<div>
                {this.props.isFetching ? <Preloader /> : null}
            </div>} */}
            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                add={this.props.add}
                remove={this.props.remove}
                followingInProgress={this.props.followingInProgress}
                unfollowThunk={this.props.unfollowThunk}
                followThunk={this.props.followThunk}
                getUsersThunk={this.props.getUsersThunk} />
        </>
    }
}

export default UsersAPIContainer;


