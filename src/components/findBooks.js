import React from "react";
import { Link } from 'react-router-dom';


//Rendering in Main.js - allows user to search library of books
export const FindBooks = () => {
  return(
    <div className="open-search">
      <Link to="/Search"> Add a book </Link>
    </div>
  ); 
}