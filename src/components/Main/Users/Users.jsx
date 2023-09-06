import React from 'react';
import Paginator from '../../common/Paginator/Paginator';
import User from './User';
import cl from './Users.module.scss';

const Users = (props) => {

    return (
        <section className={cl.sectionUsers} >
            <Paginator onPageChanged={props.onPageChanged}
                currentPage={props.currentPage}
                totalUserCount={props.totalUserCount}
                pageSize={props.pageSize} />
            <div className={cl.blockUserWrapper}>
                {
                    props.users.map(u => <User
                        user={u} className={cl.userWrapper}
                        id={u.id} key={u.id}
                        followingInProgress={props.followingInProgress}
                        unfollowThunk={props.unfollowThunk}
                        followThunk={props.followThunk}
                    />)
                }
            </div>
        </section >
    );
};

export default Users;