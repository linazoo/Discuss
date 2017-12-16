import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';

export default class ViewDetail extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const url = `${ this.props.url }.json`
    this.props.fetchView(url)
  }

  render() {
    const cardStyle = {
      'padding': '30px',
      'marginBottom': '10px'
    }
    
    return (
      <Card 
        onClick={ this.handleClick } 
        style={cardStyle} >
        <p> {this.props.title} </p>
        <p> author: {this.props.author} </p>
      </Card>
    );
  }
}