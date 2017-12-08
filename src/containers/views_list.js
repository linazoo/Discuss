import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewDetail from '../components/view_detail';

class ViewsList extends Component {
  renderViews(viewData) {
    const viewTitle = viewData.data.title;
    const author = viewData.data.author;

    return (
      <ViewDetail
        title={viewTitle}
        author={author}
      />
    );
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.views.map(this.renderViews)}
        </ul>
      </div>
    );
  }

}

function mapStateToProps({ views }) {
  return { views };
}

export default connect(mapStateToProps)(ViewsList);