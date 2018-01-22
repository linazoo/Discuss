import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emptyViews, removeActiveView } from '../actions/index';
import { bindActionCreators } from 'redux';
import SearchBar from '../containers/search_bar';
import NavButtons from '../containers/nav_buttons';
import ViewsList from '../containers/views_list';
import ViewDiscussion from '../components/view_discussion';
import Divider from 'material-ui/Divider';
import Header from './header';

/**
 * Component representing overall App
 */
class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const isHome = (!this.props.views.length && !this.props.activeView)
    const appClasses = isHome ? "app-container home" : "app-container" ;

    return (
      <div className={appClasses}>
        <Header 
          views={this.props.views} 
          activeView={this.props.activeView}
          emptyViews={this.props.emptyViews}
          removeActiveView={this.props.removeActiveView}
          />
        <SearchBar/>
        <NavButtons views={this.props.views}/>
        <ViewsList />
        <ViewDiscussion activeView={this.props.activeView} replies={this.props.activeViewReplies}/>
      </div>
    );
  }
}

/**
 * Adds state to props of component
 * @param { Object } state 
 */
function mapStateToProps(state) {
  return { 
    views : state.views,
    activeView: state.activeView.view,
    activeViewReplies: state.activeView.replies
  };
}

/**
 * connects component with action creators
 * @param { Function } dispatch 
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ emptyViews, removeActiveView }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);