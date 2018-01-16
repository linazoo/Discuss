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

		const inputStyles = {
			'width': '60%',
			'backgroundColor': 'white',
			'marginTop': '20px',
			'marginLeft': '20%'
		};
		const navStyles = {
			'width': '19%',
			'marginLeft': '3%'
		}
		const daStyle = {
			'color': 'white'
		}
		if (activeView || views.length ) { 
      return <div></div>
		};
		
		return (
			<div>
				<div className="form-container row">
					<form onSubmit={this.onFormSubmit} className="col-md-6 col-md-offset-3">
						<Input
							fullWidth="true"
							placeholder="Change My View about this..."
							className="search-bar"
							value={this.state.term}
							style={daStyle}
							onChange={this.onInputChange} 
							InputLabelProps={{
								shrink: true,
							}}/>
							<RaisedButton type="submit" className="submit-button" color="primary" style={inputStyles}>Search</RaisedButton>	
					</form>
				</div>
				<div className="nav-buttons">
					<RaisedButton className="hotbutton" onClick={this.handleClick} color="primary" style={navStyles}>hot</RaisedButton>
					<RaisedButton className="topbutton" onClick={this.handleClick} color="primary" style={navStyles}>top</RaisedButton>
					<RaisedButton className="newbutton" onClick={this.handleClick} color="primary" style={navStyles}>new</RaisedButton>
					<RaisedButton className="randbutton" onClick={this.handleClick} color="primary" style={navStyles}>rand</RaisedButton>
					
					
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