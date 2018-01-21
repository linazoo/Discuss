import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchViewsByCategory } from '../actions/index';
import RaisedButton from 'material-ui/Button';
import About from '../components/about';

/**
 * container component representing the navigation buttons section on "home" page
 */
class NavButtons extends Component {
	constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * handles click of navigation buttons and calls fetchViewsByCategory action creator
   * @param { Object } event 
   */
  handleClick(event) {
		const category = event.target.closest('button').dataset.category;
    this.props.fetchViewsByCategory(category);
	}

  render(){
    // only render if we don't have any views
    if (this.props.views.length){ return null };

    // override Material-UI default styles
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
        {/* TODO: remove this About component from searchBar - should exist separately */}
        <About />
      </div>
    )
  }
}

/**
 * allows component to access action creators in props
 * @param { Function } dispatch 
 */
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchViewsByCategory }, dispatch);
}

// connect component to redux store - subscribing this component to redux store updates
export default connect(null, mapDispatchToProps)(NavButtons);