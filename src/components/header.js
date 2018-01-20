import React, { Component } from 'react';
import Logo from '../cmv_logo.js';

const Header = (props) => {
  const styleClass = props.views.length ? "small" : "";
	return (
		<div className="header-container">
			<div className={"logo-container " + styleClass}>
				<Logo />
			</div>
		</div>
	);
}
export default Header ;