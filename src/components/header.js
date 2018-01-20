import React, { Component } from 'react';
import Logo from '../cmv_logo.js';

export default class Header extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		if (this.props.views.length) { return null };
		return (
			<div className="header-container">
					<div className="logo-container">
						<Logo />
					</div>
			</div>
		);
	}
}