import { createStore, compose, applyMiddleware} from 'redux';
import isNil from 'lodash/isNil'
import createSagaMiddleware from 'redux-saga'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import watchAllSagas from './store/rootSaga'
import reducers from './store/rootReducers'

let enhancers = compose
if(!isNil(process.env) && process.env.NODE_ENV === 'development'){
    enhancers = composeWithDevTools
}

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(reducers, enhancers(applyMiddleware(sagaMiddleWare, thunk, promiseMiddleware)))

sagaMiddleWare.run(watchAllSagas)

export default store