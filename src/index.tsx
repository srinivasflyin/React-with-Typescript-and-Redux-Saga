import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Store } from '../src/store/index'
import createRoutes from './routes'
import { Provider } from 'react-redux'
const routes = createRoutes()
ReactDOM.render(<Provider store={Store}>{routes}</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
