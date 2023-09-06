import React, { Suspense } from 'react';
import Backgrond from './Background/Background';
import Aside from './Aside/Aside';
/* import Article from './Article/Article'; */
/* import Dialogs from './Dialogs/Dialogs'; */
/* import UsersContainer from './Users/UsersContainer'; */
import Login from '../Login/LoginForm';
import { Route, Switch } from 'react-router-dom';
import cl from './Main.module.scss';
import Preloader from '../common/Preloader/Preloader';

const Article = React.lazy(() => import('./Article/Article'));
const Dialogs = React.lazy(() => import('./Dialogs/Dialogs'));
const UsersContainer = React.lazy(() => import('./Users/UsersContainer'));

const Main = () => {

    return (
        <main className={cl.main}>
            <Backgrond />
            <div className={cl.container}>
                <Aside />
                <Suspense fallback={<div><Preloader /></div>}>
                    <Switch>
                        <Route path='/dialogs/' render={() => <Dialogs />} />
                        <Route path='/profile/:userId?/' render={() => <Article />} />
                        <Route path='/users/' render={() => <UsersContainer />} />
                        <Route path='/login/' render={() => <Login />} />
                    </Switch>
                </Suspense>
            </div>
        </main>
    );
};

export default Main;