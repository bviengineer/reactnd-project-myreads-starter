/*
  CREDITS:
	  1. Maeva NAP walkthrough was instrumental during the development of this project: 
    https://www.youtube.com/watch?v=i6L2jLHV9j8&index=39&list=PLCDXYWEHWgppmc0TJlQJLu3EQJ2Lka7lg&t=3600s
    
    2. Learn ReactJS: Part1 on CodeCademy was beneficial in understanding how ReactJS works. 

  PURPOSE of Book.js:
    Book.js handles the user shelf selection after the search results have been returned.  
*/

import React from 'react';

function Book(props){
	//if a book image does not exist, will display a blank space
	let imgThumbnail = props.book.imageLinks ? props.book.imageLinks.thumbnail : "";

	return(
	<div className="book">
		<div className="book-top">
			<div style={{ boxShadow: `0px 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`, background: `yellow`, width: 128, height: 193, backgroundImage: `url("${imgThumbnail}")` }}></div>
				<div className="book-shelf-changer">
				<select onChange = { (e) => props.updateShelf(props.book, e.target.value)}
					value={props.activeShelf} //highlights which shelf a book is on while on the search page
				> {/* closing angle bracket for select element */}
	<option value="move" disabled>Move to...</option>
	<option value="currentlyReading">Currently Reading</option>
	<option value="wantToRead">Want to Read</option>
	<option value="read">Read</option>
	<option value="none">None</option>
	</select>
	</div>
		</div>
		<div className="book-title">{props.book.title}</div>
		<div className="book-authors">{props.book.authors}</div>
			</div>
		);
	}

	export default Book;