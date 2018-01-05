import React, { Component } from 'react';


export default class ViewShow extends Component {
	constructor(props) {
		super(props)
	}

	// renderReplies(replyData) {
	// 	const myStyle = {
	// 	}
	// 	return (
	// 		<div className="bubble-arrow-right" style={myStyle}>{replyData.data.body}</div>
	// 	);
	// }

	renderAllReplies(replies){
		let num = 1;
		const yo = replies.map((reply) => {
			num = num+1;
			return (
				<div className={num % 2 === 0 ? "bubble-arrow-right" : "bubble-arrow-left"}>{reply.data.body.substring(0,300)}</div>
			)
		});
		return yo	
	}

	render() {
		const title = this.props.view.title.replace('CMV: ', '');
		const replies = this.props.replies;
		return (
			<div className="">
				<h4>{ title }</h4>
				<div className="replies-container">
					{ this.renderAllReplies(replies) }
				</div>
			</div>
		);
	}
}

