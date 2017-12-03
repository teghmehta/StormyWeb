import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import {Provider} from "react-redux";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.querySelector('#app'));