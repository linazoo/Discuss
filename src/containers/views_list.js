import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewsList extends Component {
    renderViews(viewData) {
        return (
            <li>
                { viewData.data.title }
            </li>
        );
    }

    render() {
        return (
            <div> 
                <h2>LIST</h2>
                <ul>
                    { this.props.views.map(this.renderViews)}
                </ul>
            </div>
        );
    }

}

function mapStateToProps({ views }) {
    return { views };
}

export default connect(mapStateToProps)(ViewsList);