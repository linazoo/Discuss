import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import ViewsList from '../containers/views_list';
import Loader from './loader';
import Flexbox from 'flexbox-react';
import Divider from 'material-ui/Divider';
import Header from './header';

export default class App extends Component {
  render() {

    return (
      <div className="app-container">
        <Header />
        <SearchBar/>
        <Divider />
        <ViewsList />
      </div>
    );
  }
}
