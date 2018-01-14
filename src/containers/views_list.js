import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchView, emptyViews } from '../actions/index';
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

  handleClick() {
    this.props.emptyViews();
    // empty the list of views so that the search bar comes back
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
      <div className="list-container" >
        <div className="logo" onClick={this.handleClick.bind(this)}> 
          <Logo/>
        </div>

        <div className="decorations">
          <div className="white-border"></div>
          <div className="blue-shape">
            <ul className="view-list">
              {this.props.views.map(this.renderViews)}
            </ul>
          </div>
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
  return bindActionCreators({ fetchView, emptyViews }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewsList);