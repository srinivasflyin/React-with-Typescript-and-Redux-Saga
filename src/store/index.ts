import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import  RootReducer  from './reducers'

//const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(RootReducer, applyMiddleware(thunk))