import React from 'react';
import ProfileContainer from './Profile/ProfileContainer';
import PostsContainer from './Posts/PostsContainer';
import cl from '../Article/Article.module.scss';



const Article = () => {

    return (
        <article className={cl.acticle}>
            <ProfileContainer />
            <PostsContainer />
        </article>
    );
};

export default Article;

