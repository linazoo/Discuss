import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../containers/search_bar';
import ViewsList from '../containers/views_list';
import Loader from './loader';
import Divider from 'material-ui/Divider';
import Header from './header';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="app-container">
        <Header views={this.props.views}/>
        <SearchBar/>
        <ViewsList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    views : state.views,
    activeView: state.activeView.view
  };
}

export default connect(mapStateToProps)(App);