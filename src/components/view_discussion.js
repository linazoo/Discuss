import React, { Component } from 'react';
import Logo from '../cmv_logo.js';
import Quote from '../quote.js';
import ClosingQuote from '../closing-quote.js';
import showdown from 'showdown';

/**
 * component representing ViewDiscussion
 */
export default class ViewDiscussion extends Component {
	constructor(props) {
		super(props)
	}

	/**
	 * Returns an array of reply components
	 * @param { Array } replies 
	 */
	renderAllReplies(replies){
		const allReplies = replies.map((reply) => {
			const replyText = reply.data.body,
				postAuthor = reply.data.author;
			// removes replies that have been removed - text too short
			if(replyText && replyText.length < 10) {
				return null;
			}

			return (
				<div className="reply">
					{/* reply text comes as markdown - must parse */}
					{ this.renderParsedMarkdown(replyText) }
					<div className="author">
						{postAuthor}
					</div>
				</div>
			)
		});
		return allReplies;
	}

	/**
	 * Takes Markown string and returns formatted HTML
	 * @param { String } viewText 
	 */
	renderParsedMarkdown(viewText) {
		const converter = new showdown.Converter();
    let html = converter.makeHtml(viewText);
		// remove line breaks coming from response
		let n = html.indexOf('<hr />');
		html = html.substring(0, n != -1 ? n : html.length);

		return (
			<div dangerouslySetInnerHTML={{__html: html}} />
		)
		
	}

	render() {
		if (!this.props.activeView) {return null };

		const title = this.props.activeView.title.replace('CMV: ', ''),
			viewText = this.props.activeView.selftext,
			replies = this.props.replies;
		
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

