import React, { Component } from 'react';
import Logo from '../cmv_logo.js';

export default class Header extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="header-container animated slideInDown">
				<div className="row">
					<div className="logo-container col-sm-6 col-sm-offset-3">
						<Logo />
					</div>
				</div>
				<div className="row">
					<div className="intro-text col-sm-12 col-md-6 col-md-offset-3 centered">
					</div>
				</div>
			</div>
		);
	}
}