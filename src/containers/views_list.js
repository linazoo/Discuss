import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchView } from '../actions/index';
import ViewDetail from '../components/view_detail';
import ViewShow from '../components/view_show';

class ViewsList extends Component {
  constructor(props){
    super(props);
    this.renderViews = this.renderViews.bind(this);
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
    const activeView = this.props.activeView;
    const activeViewReplies = this.props.activeViewReplies;

    if (activeView) { 
      return <ViewShow 
        view={activeView}
        replies={activeViewReplies}
      /> 
    };
    return (
      <div className="list-container">
        <div className="blue-shape">
        </div>

        <ul className="view-list">
          {this.props.views.map(this.renderViews)}
        </ul>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { 
    views : state.views,
    activeView: state.activeView.view,
    activeViewReplies: state.activeView.replies
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchView }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewsList);