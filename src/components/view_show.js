import React, { Component } from 'react';


export default class ViewShow extends Component {
	constructor(props) {
		super(props)
	}

	renderReplies(replyData) {
		const myStyle = {
		}
		return (
			<div className="bubble-arrow-right" style={myStyle}>{replyData.data.body}</div>
		);
	}

	render() {
		const title = this.props.view.title.replace('CMV: ', '');
		const replies = this.props.replies;
		return (
			<div className="">
			<h4>{ title }</h4>
			{replies.map(this.renderReplies)}
				</div>
		);
	}
}

