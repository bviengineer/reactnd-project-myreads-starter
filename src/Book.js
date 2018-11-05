import React from 'react';
import { ShelfChanger } from "./ChangeShelf.js"



//Rendering in Search.js, reads.js, desiredReeds.js, currentReads.js
export class Book extends React.Component {	
	render(){
		
		//if a book image does not exist, will display a blank space
		let imgThumbnail = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : "";

		return(
		<div className="book">
			<div className="book-top">
				
				<div style={{ boxShadow: `0px 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`, background: `yello
				w`, width: 128, height: 193, backgroundImage: `url("${imgThumbnail}")` }}>
				</div>

				{/* ChangeShelf Component */}
				<ChangeShelf book={this.props.book} updateShelf={this.props.updateShelf} activeShelf={this.props.activeShelf}/>
			</div>
			
			<div className="book-title">{this.props.book.title}</div>
			<div className="book-authors">{this.props.book.authors}</div>
		
		</div>
		);
	}
}