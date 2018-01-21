import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchViews } from '../actions/index';
import RaisedButton from 'material-ui/Button';


class NavButtons extends Component {
	constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
		alert("hey");
	}

  render(){

    if (this.props.views.length){ return null };
    
    const navButtonStyles = {
      'width': '19%',
      'color': 'white',
      'fontFamily': 'gillsans'
    }
    return (
      <div className="nav-buttons">
        <RaisedButton className="hotbutton" onClick={this.handleClick} color="primary" style={navButtonStyles}>hot</RaisedButton>
        <RaisedButton className="topbutton" onClick={this.handleClick} color="primary" style={navButtonStyles}>top</RaisedButton>
        <RaisedButton className="newbutton" onClick={this.handleClick} color="primary" style={navButtonStyles}>new</RaisedButton>
        <RaisedButton className="randbutton" onClick={this.handleClick} color="primary" style={navButtonStyles}>rand</RaisedButton>
      </div>	
    )
  }
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchViews }, dispatch);
}

export default connect(null, mapDispatchToProps)(NavButtons);