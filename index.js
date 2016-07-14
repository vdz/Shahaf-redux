import React from 'react';
import ReactDOM from 'react-dom';
import Root from './src/containers/Root.js';
import configureStore from './src/store/configureStore.js';

// ID of the DOM element to mount app on
const DOM_APP_EL_ID = 'app';

let store = configureStore();

// Render the router
ReactDOM.render((
    <Root store={store} />
), document.getElementById(DOM_APP_EL_ID));
