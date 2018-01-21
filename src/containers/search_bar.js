import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchViews } from '../actions/index';
import Input from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import RaisedButton from 'material-ui/Button';

/**
 * Container component representing search bar on "home" page
 */
class SearchBar extends Component {
	constructor(props) {
		super(props)

		this.state = { term: '' };
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	/**
	 * updates the state of the term as is updated by user
	 * @param { Object } event 
	 */
	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	/**
	 * submit handler for search
	 * executes action creator to fetch views based on search term
	 * @param { Object } event 
	 */
	onFormSubmit(event) {
		event.preventDefault();
		this.props.fetchViews(this.state.term);
		this.setState({ term: '' });
	}

	render() {
		const activeView = this.props.activeView;
		const views = this.props.views;

		// only show search bar when user is not looking at views
		if (activeView || views.length ) { 
      return null;
		};

		// styles to override Material defaults
		const searchButtonStyles = {
			'width': '60%',
			'backgroundColor': '#368E59',
			'margin': '20px auto',
			'display': 'block',
			'color': 'white',
			'fontFamily': 'gillsans'
		};

		return (
			<div>
				<div className="form-container">
					<form onSubmit={this.onFormSubmit}>
						<Input
							placeholder="Change My View about this..."
							className="search-bar"
							fullWidth="true"
							value={this.state.term}
							style={{color: 'white'}}
							onChange={this.onInputChange} 
						/>
						<RaisedButton 
							type="submit" 
							className="submit-button" 
							color="primary" 
							style={searchButtonStyles}>Search
						</RaisedButton>	
					</form>
				</div>
			</div>
		);
	}
}

/**
 * merge state into the component's props
 * @param { object } state 
 */
function mapStateToProps(state) {
  return { 
    views : state.views,
    activeView: state.activeView.view
  };
}

/**
 * allows component to access action creators in props
 * @param { Function } dispatch 
 */
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchViews }, dispatch);
}

// connect component to redux store - subscribing this component to redux store updates
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);