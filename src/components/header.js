import React, { Component } from 'react';
import Logo from '../cmv_logo.js';

export default class Header extends Component {
	constructor(props) {
		super(props)
	}

	render() {
    // const classYo = this.props.views.length ? "slideOutUp bye" : "slideInDown";
		const classYo = this.props.views.length ? "small" : "";
		return (
			<div className="header-container">
				<div className={"logo-container " + classYo}>
					<Logo />
				</div>
			</div>
		);
	}
}