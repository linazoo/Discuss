import React, { Component } from 'react';
import Logo from '../cmv_logo.js';
import Quote from '../quote.js';
import ClosingQuote from '../closing-quote.js';
import showdown from 'showdown';
// import HtmlToReactParser from 'html-to-react';
// import ReactMarkdown from 'react-markdown';
// import ReactDOM from 'react-dom';
// import ReactMarkdown from 'react-markdown';
// const ReactDOM = require('react-dom')
// const ReactMarkdown = require('react-markdown')
// import ReactDOMServer from 'react-dom/server';
// import HtmlToReactParser from 'html-to-react';
// var ReactDOMServer = require('react-dom/server');
// var HtmlToReactParser = require('html-to-react').Parser;



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
		var converter = new showdown.Converter();
		const yo = replies.map((reply) => {
			const replyText = reply.data.body;
			const postAuthor = reply.data.author;
			var replyHtml      = converter.makeHtml(replyText);
			
			// this is to get rid of the 'remove' and 'deleted' comments 
			if(replyText.length < 10) {
				return;
			}
			return (
				<div className="reply">
					<div dangerouslySetInnerHTML={{__html: replyHtml}} />
					<div className="author">
						{postAuthor}
					</div>
				</div>
			)
		});
		return yo	
	}

	render() {
		const title = this.props.view.title.replace('CMV: ', '');
		const viewText = this.props.view.selftext;
		const replies = this.props.replies;
		
    
    var converter = new showdown.Converter(),
    html      = converter.makeHtml(viewText);
		
		var s = html;
		var n = s.indexOf('<hr />');
		s = s.substring(0, n != -1 ? n : s.length);

		return (
			<div className="discussion-container">
        <div className="logo"> 
          <Logo/>
        </div>
				{/* <div className="title-container">
					<h4>{ title }</h4>
				</div>
				<div className="replies-container">
					{ this.renderAllReplies(replies) }
        </div> */}
        <div className="white">
					<div className="view-detail-container">
           
            <Quote />
						{/* add the quote svg here*/}
            <h4 className="view-title">
              { title }
            </h4>

						<div className="overflow-view">
              <div dangerouslySetInnerHTML={{__html: s}} />
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

