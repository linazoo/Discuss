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
			const replyText = reply.data.body
			// this is to get rid of the 'remove' and 'deleted' comments 
			if(replyText.length < 10) {
				return;
			}
			return (
				<div className={num % 2 === 0 ? "bubble-arrow-right" : "bubble-arrow-left"}>{replyText.substring(0,300)}</div>
			)
		});
		return yo	
	}

	render() {
		const title = this.props.view.title.replace('CMV: ', '');
		const replies = this.props.replies;
		return (
			<div className="">
				<div className="title-container">
					<h4>{ title }</h4>
				</div>
				<div className="replies-container">
					{ this.renderAllReplies(replies) }
				</div>
			</div>
		);
	}
}

