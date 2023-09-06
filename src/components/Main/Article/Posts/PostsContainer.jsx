import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../../../redux/profile-reducer';
import Posts from './Posts';


const mapStateToProps = (state) => {

    return {
        posts: state.profilePage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newPostText) => {
            dispatch(addPost(newPostText));
        }
    };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;