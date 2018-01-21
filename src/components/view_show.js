import React, { Component } from 'react';
import Logo from '../cmv_logo.js';
import Quote from '../quote.js';
import ClosingQuote from '../closing-quote.js';
import showdown from 'showdown';


export default class ViewShow extends Component {
	constructor(props) {
		super(props)
	}


	renderAllReplies(replies){
		// const converter = new showdown.Converter();
		const allReplies = replies.map((reply) => {
			const replyText = reply.data.body;
			const postAuthor = reply.data.author;

			if(replyText && replyText.length < 10) {
				return null;
			}

			return (
				<div className="reply">
					{ this.renderParsedMarkdown(replyText) }
					<div className="author">
						{postAuthor}
					</div>
				</div>
			)
		});
		return allReplies;
	}

	renderParsedMarkdown(viewText) {
		const converter = new showdown.Converter();
    let html = converter.makeHtml(viewText);
		
		// remove line breaks coming from response
		var n = html.indexOf('<hr />');
		html = html.substring(0, n != -1 ? n : html.length);

		return (
			<div dangerouslySetInnerHTML={{__html: html}} />
		)
		
	}

	render() {
		const title = this.props.view.title.replace('CMV: ', '');
		const viewText = this.props.view.selftext;
		const replies = this.props.replies;
		

		return (
			<div className="discussion-container">
        <div className="white">
					<div className="view-detail-container">
           
            <Quote />
            <h4 className="view-title">
              { title }
            </h4>

						<div className="overflow-view">
							{ this.renderParsedMarkdown(viewText) }
							<ClosingQuote />
						</div>

						<div className="small-replies">
							<h2 className="reply-title"> Replies </h2>
							{ this.renderAllReplies(replies) }
						</div>
					</div>
					<div className="blank">
						<div className="view-replies-container">
							{ this.renderAllReplies(replies) }
						</div>
					</div>
				</div>
			</div>
		);
	}
}

