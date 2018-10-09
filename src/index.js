/*
  CREDITS:
	  1. Maeva NAP walkthrough was instrumental during the development of this project: 
    https://www.youtube.com/watch?v=i6L2jLHV9j8&index=39&list=PLCDXYWEHWgppmc0TJlQJLu3EQJ2Lka7lg&t=3600s
    
    2. Learn ReactJS: Part1 on CodeCademy was beneficial in understanding how ReactJS works. 

  PURPOSE of index.js:
    Index.js will render the entire application pass the displaying over to the index.html page.  
*/

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>, 
	document.getElementById('root')
)
