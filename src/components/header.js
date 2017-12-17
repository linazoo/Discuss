import React, { Component } from 'react';
import Logo from '../cmv_logo.js';

export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="header-container">
                <div className="row">
                    <div className="logo-container col-sm-12">
                        <Logo />
                    </div>
                </div>
                <div className="row">
                    <div className="intro-text col-sm-12 col-md-6 col-md-offset-3 centered">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate dui sem, et hendrerit erat euismod non. Cras semper, nisi id hendrerit fermentum</p>
                    </div>
                </div>
            </div>
        );
    }
}