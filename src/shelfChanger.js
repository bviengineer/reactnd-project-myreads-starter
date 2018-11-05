import React from "react";

export class ShelfChanger extends React.Component{
  render(){
    return(
      <div className="book-shelf-changer">
        <select 
          onChange = { (e) => this.props.updateShelf(this.props.book, e.target.value)} 
          value={this.props.activeShelf} > //highlights which shelf a book is on while on the search page
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}