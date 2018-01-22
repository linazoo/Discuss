import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchView } from '../actions/index';
import ViewDetail from '../components/view_detail';
import Logo from '../cmv_logo.js';

/**
 * container component representing the list of views on the "list" page
 */
class ViewsList extends Component {
  constructor(props){
    super(props);

    this.renderViews = this.renderViews.bind(this);
  }

  /**
   * Take the information about a particular view and returns a ViewDetail component with information passed as prosp
   * @param { Object } viewData 
   */
  renderViews(viewData) {
    const viewTitle = viewData.data.title,
      author = viewData.data.author,
      id = viewData.data.id,
      url = viewData.data.url;

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

    if (!this.props.views.length || this.props.activeView) {
      return null;
    }
    
    return (
      <div className="list-container" >
        <div className="decorations">
          <div className="white-border">
            <a href="#">
              <span className="bottom"></span>
            </a>
          </div>
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
  return bindActionCreators({ fetchView }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewsList);