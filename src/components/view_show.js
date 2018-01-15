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
		const yo = replies.map((reply) => {
			const replyText = reply.data.body
			// this is to get rid of the 'remove' and 'deleted' comments 
			if(replyText.length < 10) {
				return;
			}
			num = num+1;
			return (
				<div className={num % 2 === 0 ? "bubble-arrow-right reply" : "bubble-arrow-left reply"}>
					{replyText}
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

    // var ReactDOMServer = require('react-dom/server');
    // var HtmlToReactParser = require('html-to-react').Parser;
 
 
    // var htmlInput = html;
    // var htmlToReactParser = new HtmlToReactParser().Parser;
    // var reactElement = htmlToReactParser.parse(htmlInput);
    // var reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);
    // debugger;
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
              <div dangerouslySetInnerHTML={{__html: html}} />
						</div>
            	<ClosingQuote />
					</div>
        </div>
				<div className="blank">
					<div className="view-replies-container">
						{ this.renderAllReplies(replies) }
					</div>
				</div>
			</div>
      
      
      // <div className="list-container" >
      //   <div className="logo" onClick={this.handleClick.bind(this)}> 
      //     <Logo/>
      //   </div>

      //   <div className="decorations">
      //     <div className="white-border">
      //       <a href="#">
      //         <span className="bottom"></span>
      //       </a>
      //     </div>
      //     <div className="blue-shape">
      //       <ul className="view-list">
      //         {this.props.views.map(this.renderViews)}
      //       </ul>
      //     </div>
      //   </div>
      // </div>
		);
	}
}

