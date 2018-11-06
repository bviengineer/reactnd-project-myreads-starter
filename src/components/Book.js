import React from 'react';
import { ChangeShelf } from "./ChangeShelf.js"



/*Rendering in Search.js, reads.js, desiredReeds.js, currentReads.js
Compnent will display book attributes (image, author, title) for each book*/
export const Book = (props) => {			
		//if a book image does not exist, will display a blank space
		let imgThumbnail = props.book.imageLinks ? props.book.imageLinks.thumbnail : "";

		return(
		<div className="book">
			<div className="book-top">
				
				<div style={{ boxShadow: `0px 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`, background: `yello
				w`, width: 128, height: 193, backgroundImage: `url("${imgThumbnail}")` }}>
				</div>

				{/* ChangeShelf Component */}
				<ChangeShelf book={props.book} updateShelf={props.updateShelf} activeShelf={props.activeShelf}/>
			</div>
			
			<div className="book-title">{props.book.title}</div>
			<div className="book-authors">{props.book.authors}</div>
		
		</div>
		);
	} 
