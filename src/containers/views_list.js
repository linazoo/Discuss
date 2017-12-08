import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewsList extends Component {
    render() {
        return (
            <ul>
                <h2>LIST</h2>
            </ul>
        );
    }

}

function mapStateToProps({ views }) {
    return { views };
}

export default connect(mapStateToProps)(ViewsList);