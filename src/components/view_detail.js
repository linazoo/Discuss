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
    const spanStyle = {
      'display': 'block',
      'paddingTop': '10px',
      'fontStyle': 'italic'
    }
    const authorStyle = {
      'textAlign': 'right'
    }
    const title = this.props.title.replace('CMV: ', '');
    
    return (
      <Card 
        onClick={ this.handleClick } 
        style={cardStyle} >
        <p> {title} <span style={spanStyle}>Change my View</span> </p>
        <p style={authorStyle}>{this.props.author} </p>
      </Card>
    );
  }
}