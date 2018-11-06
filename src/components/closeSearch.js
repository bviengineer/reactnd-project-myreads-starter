import React from "react";
import { Link } from 'react-router-dom';


//Rendering in Search.js - closes the search window and returns to the main page
export const CloseSearch = () => {
  return(
  <Link 
    className="close-search"
    to="/">Close
  </Link>
  );
}