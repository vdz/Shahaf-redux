import React from 'react';
import List from '../components/List.js';
import AddItem from '../components/AddItem.js';

export const App = React.createClass({
    render : function() {
        return  <section className='app-containers'>
                    <AddItem />
                    <List />
                    {this.props.children}
                </section>;
    }
});


