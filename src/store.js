import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import test from './reducers/test';


export default createStore(combineReducers({test}), compose(applyMiddleware(promise(),thunk))
);
