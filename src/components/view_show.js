import React, { Component } from 'react';

export default class ViewShow extends Component {
	constructor(props) {
		super(props)
	}

	renderReplies(replyData) {
		const myStyle = {
			'border': '2px solid black'
		}
		return (
			<div className="" style={myStyle}>{replyData.data.body}</div>
		);
	}

	render() {
		const title = this.props.view.title;
		const replies = this.props.replies;
		return (
			<div className="">
	
				{replies.map(this.renderReplies)}
				</div>
		);
	}
}

