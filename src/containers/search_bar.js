import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchViews } from '../actions/index';


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
		const style = {
			'margin': '40px'
		}
		return (
			<form onSubmit={this.onFormSubmit} className="input-group" style={style}>
				<input
					placeholder="Search for a topic you'd change your mind about"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Search</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchViews }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);