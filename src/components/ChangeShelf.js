import React from "react";


//Rendering in Book.js - will handle the changing of books between shelves
export const ChangeShelf = (props) => {
  return(
    <div className="book-shelf-changer">
      <select 
        onChange = { (e) => props.updateShelf(props.book, e.target.value)} 
        defaultValue={props.activeShelf} >
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}