import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import ViewsList from '../containers/views_list';
import Loader from './loader';
import Flexbox from 'flexbox-react';
import Divider from 'material-ui/Divider';


export default class App extends Component {
  render() {

    return (
      <div className="app-container">
        <SearchBar/>
        <Divider />
        <ViewsList />
      </div>
    );
  }
}
