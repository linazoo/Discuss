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
		this.handleClick = this.handleClick.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.fetchViews(this.state.term);
		this.setState({ term: '' });

	}
	
	handleClick(event) {
		alert("hey");
	}
	render() {
		const activeView = this.props.activeView;
		const views = this.props.views;

		if (activeView || views.length ) { 
      return null;
		};

		const searchButtonStyles = {
			'width': '60%',
			'backgroundColor': '#368E59',
			'marginTop': '20px',
			'marginLeft': '20%',
			'color': 'white',
			'fontFamily': 'gillsans'
		};
		const navButtonStyles = {
			'width': '19%',
			'color': 'white',
			'fontFamily': 'gillsans'
		}
		const inputStyles = {
			'color': 'white'
		}
		
		return (
			<div>
				<div className="form-container">
					<form onSubmit={this.onFormSubmit}>
						<Input
							placeholder="Change My View about this..."
							className="search-bar"
							value={this.state.term}
							style={inputStyles}
							onChange={this.onInputChange} 
							InputLabelProps={{
								shrink: true,
							}}/>
							<RaisedButton type="submit" className="submit-button" color="primary" style={searchButtonStyles}>Search</RaisedButton>	
					</form>
				</div>
				<div className="nav-buttons">
					<RaisedButton className="hotbutton" onClick={this.handleClick} color="primary" style={navButtonStyles}>hot</RaisedButton>
					<RaisedButton className="topbutton" onClick={this.handleClick} color="primary" style={navButtonStyles}>top</RaisedButton>
					<RaisedButton className="newbutton" onClick={this.handleClick} color="primary" style={navButtonStyles}>new</RaisedButton>
					<RaisedButton className="randbutton" onClick={this.handleClick} color="primary" style={navButtonStyles}>rand</RaisedButton>
				</div>	
				<div className="main-quote">
					<h2>"In order to resolve our differences we must first understand them"</h2>
				</div>
				<div className="cmw-explained">
					<p>What is /r/changemyview?
CMV is a subreddit dedicated to the civil discourse of opinions, and is built around the idea that in order to resolve our differences, we must first understand them. We believe that productive conversation requires respect and openness, and that certitude is the enemy of understanding.

That's why CMV is the perfect place to post an opinion you're open to changing. We're not looking to host aggressive debates, or encourage judgement, but help each other understand different perspectives.

changemyview.net</p>
				</div>
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