import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';

export default class ViewDetail extends Component {
  constructor(props) {
    super(props);

    this.handleCLick = this.handleClick.bind(this);
  }
  handleClick() {
    alert("hey")
  }

  render() {
    return (
      <Card onClick= { this.handleClick } >
        <p> {this.props.title} </p>
        <p> author: {this.props.author} </p>
      </Card>
    );
  }
}