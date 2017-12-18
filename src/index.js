import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import {Router,Route,browserHistory } from 'react-router';
import reduxthunk from 'redux-thunk';
import App from './components/app';
import reducers from './reducers';

import  Sigin from './components/auth/sigin';

import Signout from './components/auth/signout';

import Signup from './components/auth/signup2';

const createStoreWithMiddleware = applyMiddleware(reduxthunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>


    <Router history={browserHistory}>



        <Route component={App} path='/'>

        <Route component={Sigin} path='/signin'></Route>

            <Route component={Signout} path='/signout'></Route>


            <Route component={Signup} path='/signup'></Route>

        </Route>

    </Router>
  </Provider>
  , document.querySelector('.container'));
