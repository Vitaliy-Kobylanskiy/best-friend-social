import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { loginThunkAC } from '../../redux/auth-reducer';
import cl from './LoginForm.module.scss';
import { loginApi, authMeAPI } from '../../api/api';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={cl.form}>
            <Field required className={cl.loginInput} type="text" placeholder='Email' name={'email'} component={Input} />
            <Field required className={cl.loginInput} type="password" placeholder='Password' name={'password'} component={Input} />
            <div className={cl.checkboxWrapper}>
                <Field type="checkbox" name={'rememberMe'} component={Input} /> Remember me
            </div>
            {props.error && <p className={cl.formSummaryError}>{props.error}</p>}
            <div className={cl.loginSubmitBtnWrapper}>
                <button className={cl.loginSubmitBtn}>Sign in</button>
            </div>
        </form>
    );
};

const Login = (props) => {

    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe, loginApi, authMeAPI);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile/'} />
    }

    return (
        <div className={cl.blockWrapper}>
            <div className={cl.submitWrapper}>
                <LoginReduxForm onSubmit={onSubmit} />
            </div>
            <div className={cl.dataSubmitWrapper}>
                <span className={cl.descriptionItem}>Для входу в мережу в тестовому режимі:</span>
                <span className={cl.descriptionItem}><b>Email: </b>vkobytest@gmail.com</span>
                <span className={cl.descriptionItem}><b>Password: </b>vkobytest</span>
                <span className={cl.description}>* форма має валідацію, стежте за правильністю введення</span>
            </div>
        </div>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        loginThunk: (email, password, rememberMe, loginApi, authMeAPI) => {
            dispatch(loginThunkAC(email, password, rememberMe, loginApi, authMeAPI))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);