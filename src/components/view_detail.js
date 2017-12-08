import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';

export default class ViewDetail extends Component {
  render() {
    return (
      <Card>
        <p> {this.props.title} </p>
        <p> author: {this.props.author} </p>
      </Card>
    );
  }
}