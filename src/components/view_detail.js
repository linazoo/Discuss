import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';

/**
 * component representing a ViewDetail
 */
export default class ViewDetail extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * form url and trigger action creator
   */
  handleClick() {
    const url = `${ this.props.url }.json`
    this.props.fetchView(url)
  }

  render() {
    // remove CMV prefacing each title
    const title = this.props.title.replace('CMV: ', '');
    
    return (
      <div className="card" onClick={ this.handleClick }>
        <p className="title"> {title} </p>
        <p className="author">{this.props.author} </p>
      </div>
    );
  }
}