import React from "react";
import DebounceInput from "react-debounce-input";
import { Link } from 'react-router-dom';


//Rendering in Search.js - searches library of books and returns to main page
export const SearchLibrary = (props) => {
  return(
		<div className="search-books-bar">				
			
			{/* Returns to main page */}
			<Link className="close-search" to="/">Close </Link>

			{/* Search Bar
			---Initial state and appearence will be empty
			---State and appeareance will populate based on user query, if any matches are found */}
			<div className="search-books-input-wrapper">
				<DebounceInput 
					type="text" 
					placeholder="Search by title or author" 
					value={props.query}
					debouncetimeout={1000}
					onChange={(e) => props.updateQuery(e.target.value)} />
			</div>
		</div>
	);
}