import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, minLengthCreator, required } from '../../../../utils/validators/validators';
import Newpost from '../Newpost/Newpost';
import cl from './Posts.module.scss';

const maxLength300 = maxLengthCreator(300);
/* const minLength1 = minLengthCreator(1); */

const Posts = (props) => {

    let postElements = props.posts.postData.map(p => {
        return <Newpost key={p.id} message={p.message} id={p.id} />;
    });

    let onAddPost = (values) => {
        props.sendMessage(values.newPostText);
    };

    return (
        <section className={cl.posts}>
            <p className={cl.title}>My posts</p>
            <PostFormRedux onSubmit={onAddPost} />
            <div className={cl.newPostWrapper}>{postElements}</div>
        </section>
    );
};

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={cl.form}>
            <Field component={'textarea'}
                name={'newPostText'}
                className={cl.textarea}
                placeholder='Enter your news'
                validate={[required, maxLength300/* , minLength1 */]} />
            <div className={cl.submitWrapper}>
                <button className={cl.submit}>Send</button>
            </div>
        </form>
    )
}

const PostFormRedux = reduxForm({
    form: 'addNewPostText'
})(PostForm)



export default Posts;