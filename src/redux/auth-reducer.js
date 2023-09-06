import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth/SET-USER-DATA';


let initialState = {
    login: null,
    email: null,
    userId: null,
    isAuth: false
};

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
};

export const setUserData = (login, email, userId, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: { login, email, userId, isAuth }
    };
};

export const authMeThunkAC = (authMeAPI) => async (dispatch) => {
    const response = await authMeAPI();

    if (response.data.resultCode === 0) {
        let { login, email, id } = response.data.data;
        dispatch(setUserData(login, email, id, true));
    }
};

export const loginThunkAC = (email, password, rememberMe, apiLogin, authMeAPI) => async (dispatch) => {

    const response = await apiLogin(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(authMeThunkAC(authMeAPI));
    } else if (response.data.resultCode === 1) {
        dispatch(stopSubmit('login', { _error: 'Incorrect Email or Password' }));
    }
};

export const logoutThunkAC = (logoutApi) => async (dispatch) => {
    const response = await logoutApi();

    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
};

