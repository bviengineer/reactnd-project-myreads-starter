import React from "react";


//Rendering in Book.js
export class ChangeShelf extends React.Component{
  render(){
    return(
      <div className="book-shelf-changer">
        <select 
          onChange = { (e) => this.props.updateShelf(this.props.book, e.target.value)} 
          value={this.props.activeShelf} >
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

/*
Will like to know if having the props being inherited here also needs to be inherited in the component instance where the component ChangeShelf is being rendered

*/