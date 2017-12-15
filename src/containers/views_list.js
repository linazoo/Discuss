import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchView } from '../actions/index';
import ViewDetail from '../components/view_detail';

class ViewsList extends Component {
  constructor(props){
    super(props);
    this.renderViews = this.renderViews.bind(this);
    // this.testRequest = this.testRequest.bind(this);
  }

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
        fetchView={this.props.fetchView}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchView }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewsList);