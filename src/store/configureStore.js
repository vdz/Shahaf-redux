import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reducer, default_state } from '../reducers/index.reducer.js';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const finalCreateStore = compose(
    applyMiddleware(thunk),
    applyMiddleware(createLogger({
        collapsed: true
    })),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState) {

    initialState = {
        app : default_state
    };

    const rootReducer = combineReducers({
        app : reducer
    });

    return finalCreateStore(rootReducer, initialState);
}