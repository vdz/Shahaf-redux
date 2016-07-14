import React from 'react';
import { connect } from 'react-redux';

export const List = React.createClass({
    title : 'hello',
    render : function() {
        const { list } = this.props;
        let result = [];

        list.forEach((item, index) => {
            result.push(<li key={'list-' + index}>{item}</li>);
        });

        return  <ul className='List'>
                    {result}
                </ul>;
    }
});

function mapStateToProps(state) {
    return {
        list : state.app.list
    }
}

export default connect(mapStateToProps)(List);
