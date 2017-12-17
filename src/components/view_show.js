import React, { Component } from 'react';

export default class ViewShow extends Component {
	constructor(props) {
		super(props)
	}

	renderReplies(replyData) {
		return (
			<p>{replyData.data.body}</p>
		);
	}

	render() {
		const title = this.props.view.title;
		const replies = this.props.replies;
		return (
			<div>
				All the details here honey
				<h2>{title}</h2>
				{replies.map(this.renderReplies)}
				</div>
		);
	}
}

