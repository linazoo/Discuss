import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import ViewsList from '../containers/views_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ViewsList />
      </div>
    );
  }
}
