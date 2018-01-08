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
      'marginBottom': '10px'
    }

    const authorStyle = {
      'textAlign': 'right'
    }
    const title = this.props.title.replace('CMV: ', '');
    
    return (
      <Card
        className="card" 
        onClick={ this.handleClick } 
        style={cardStyle} >
        <p className="title"> {title} </p>
        <p className="author" style={authorStyle}>{this.props.author} </p>
      </Card>
    );
  }
}