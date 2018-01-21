import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchViewsByCategory } from '../actions/index';
import RaisedButton from 'material-ui/Button';
import About from '../components/about';


class NavButtons extends Component {
	constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
		const category = event.target.closest('button').dataset.category;
    this.props.fetchViewsByCategory(category);
	}

  render(){

    if (this.props.views.length){ return null };

    const navButtonStyles = {
      'width': '19%',
      'color': 'white',
      'fontFamily': 'gillsans'
    }
    return (
      <div>
        <div className="nav-buttons">
          <RaisedButton className="hotbutton" onClick={this.handleClick} color="primary" data-category="hot" style={navButtonStyles}>hot</RaisedButton>
          <RaisedButton className="topbutton" onClick={this.handleClick} color="primary" data-category="top" style={navButtonStyles}>top</RaisedButton>
          <RaisedButton className="newbutton" onClick={this.handleClick} color="primary" data-category="new" style={navButtonStyles}>new</RaisedButton>
        </div>	
        <About />
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchViewsByCategory }, dispatch);
}

export default connect(null, mapDispatchToProps)(NavButtons);