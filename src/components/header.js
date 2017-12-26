import React, { Component } from 'react';
import Logo from '../cmv_logo.js';

export default class Header extends Component {
	constructor(props) {
		super(props)
	}

	render() {
    // const classYo = this.props.views.length ? "slideOutUp bye" : "slideInDown";
    const classYo = this.props.views.length ? "slideOutUp bye" : "slideInDown";
		return (
			<div className={"header-container animated " + classYo }>
				<div className="row">
					<div className="logo-container ">
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