import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/js/bootstrap'

import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
  <BrowserRouter >
    <App />
  </BrowserRouter >,
  document.getElementById('root')
)
