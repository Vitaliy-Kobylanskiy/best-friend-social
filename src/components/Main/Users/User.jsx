import React from 'react';
import userPhoto from '../../../assets/img/userAva.png';
import { NavLink } from 'react-router-dom';
import { remoteFriend, addNewFriend } from '../../../api/api';
import cl from './Users.module.scss';

const User = (props) => {

    const user = props.user;

    return (
        <div className={cl.userWrapper} >
            {<NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="photo" className={cl.userPhoto} />
            </NavLink>}
            <div className={cl.dataBlock}>
                <p className={cl.userName}>{user.name}</p>
            </div>
            <div className={cl.locationBlock}>
                {user.followed
                    ? < button disabled={props.followingInProgress.includes(user.id)}
                        className={cl.button} onClick={() => { props.unfollowThunk(user.id, remoteFriend) }} >Delete</button>
                    : < button disabled={props.followingInProgress.includes(user.id)}
                        className={cl.button} onClick={() => { props.followThunk(user.id, addNewFriend) }}>Add</button>
                }
            </div>
        </div>
    );
};

export default User;