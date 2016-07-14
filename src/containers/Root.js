import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { App } from './App.js';

const Root = React.createClass({
    render: function() {
        const { store } = this.props;

        return  <Provider store={store}>
                    <App />
                </Provider>;
    }
});

Root.propTypes = {
    store :  PropTypes.object.isRequired
};

export default Root;