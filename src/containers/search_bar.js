import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchViews } from '../actions/index';
import Input from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import RaisedButton from 'material-ui/Button';


class SearchBar extends Component {
	constructor(props) {
		super(props)

		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.fetchViews(this.state.term);
		this.setState({ term: '' });

	}

	render() {
		const activeView = this.props.activeView;
		const views = this.props.views;

		const inputStyles = {
			'padding': '10px',
			'marginBottom': '20px'
		};

		if (activeView || views.length ) { 
      return <div></div>
		};
		
		return (
			<div className="form-container row">
				<form onSubmit={this.onFormSubmit} className="col-md-6 col-md-offset-3">
					<Input
						fullWidth="true"
						placeholder="Search for a topic you'd change your mind about"
						className=""
						style={inputStyles}
						value={this.state.term}
						onChange={this.onInputChange} 
						InputLabelProps={{
							shrink: true,
						}}/>
					<span className="button-container col-sm-6 col-sm-offset-3">
						<RaisedButton type="submit" className="submit-button" color="primary">Search</RaisedButton>
					</span>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return { 
    views : state.views,
    activeView: state.activeView.view
  };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchViews }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);