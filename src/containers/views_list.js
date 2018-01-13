import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchView } from '../actions/index';
import ViewDetail from '../components/view_detail';
import ViewShow from '../components/view_show';
import Logo from '../cmv_logo.js';


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

    if (!this.props.views.length) {
      return null;
    }
    
    return (
      <div className="list-container">
      {/* add onclick to make logo go back to homescreen */}
        <div className="logo"> 
          <Logo/>
        </div>

        <div className="decorations">
          <div className="white-border">
          </div>
          <div className="blue-shape">
          <ul className="view-list">
          {this.props.views.map(this.renderViews)}
        </ul>
          </div>
          <div>
        </div>
        {/* <h2>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </h2> */}
        </div>
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