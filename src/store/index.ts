import {createStore, applyMiddleware } from 'redux'
import createSagasMiddleware from 'redux-saga'
import  RootReducer  from './reducers'
import apiSaga  from './saga/index'
//const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware =  createSagasMiddleware()
const reduxStore = createStore(RootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(apiSaga)
export const Store = reduxStore