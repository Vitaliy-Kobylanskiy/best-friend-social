import { savePhotoAPI, saveProfileAPI, getProfileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SAVE_PHOTO = 'SAVE_PHOTO';

let initialState = {
    postData: [
        {
            id: 1,
            message: 'Hi, how are you?'
        },
        {
            id: 2,
            message: 'Im fine'
        }
    ],
    profile: null,
    status: ''
};

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newPostText
            };
            let stateCopy = { ...state };
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
            return stateCopy;
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SAVE_PHOTO:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            };
        default:
            return state;
    }
};


export const addPost = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    };
};

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    };
};

export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO,
        photos
    };
};

export const getProfileThunkAC = (userId) => {
    return async (dispatch) => {
        const response = await getProfileAPI(userId);

        dispatch(setUserProfile(response.data));
    };
};

export const savePhoto = (file) => {
    return async (dispatch) => {
        const response = await savePhotoAPI(file);

        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
    };
};

export const saveNewProfile = (profile) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId;
        const response = await saveProfileAPI(profile);

        if (response.data.resultCode === 0) {
            dispatch(getProfileThunkAC(userId));
        } else {
            dispatch(stopSubmit('newProfileForm', { _error: response.data.messages[0] }));
            return Promise.reject(response.data.messages[0]);
        }
    };
};


