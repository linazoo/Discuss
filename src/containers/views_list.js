import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewDetail from '../components/view_detail';

class ViewsList extends Component {
  renderViews(viewData) {
    const viewTitle = viewData.data.title;
    const author = viewData.data.author;
    const id = viewData.data.id;
    const url = viewData.data.url;
    
    return (
      <ViewDetail
        title={viewTitle}
        author={author}
        key={id}
        url={url}
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

function mapStateToProps({ views, isLoading }) {
  return { views, isLoading };
}

export default connect(mapStateToProps)(ViewsList);