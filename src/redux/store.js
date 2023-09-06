import { applyMiddleware, combineReducers, createStore } from 'redux';
import { profileReducer } from './profile-reducer';
import { messagesReducer } from './messages-reducer';
import { usersReducer } from './users-reducer';
import { authReducer } from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';



let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

window.store = store;
