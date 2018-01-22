import React, { Component } from 'react';
import Logo from '../cmv_logo.js';
import { emptyViews, removeActiveView } from '../actions/index';

/** represents the header component */
export default class Header extends Component {
	constructor(props) {
		super(props)

		this.handleClick = this.handleClick.bind(this);
	}

	/**
	 * Triggers action creator
	 */
	handleClick() {
		if (this.props.views.length && !this.props.activeView) {
			this.props.emptyViews();
		}
		if (this.props.activeView){
			this.props.removeActiveView();
		}
	}

	render() {
		const styleClass = this.props.views.length ? "small" : "";
		return (
			<div className="header-container">
				<div className={"logo-container " + styleClass} onClick={this.handleClick}>
					<Logo />
				</div>
			</div>
		);
	}
}
