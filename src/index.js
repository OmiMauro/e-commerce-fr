import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'react-loading-skeleton/dist/skeleton.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter >
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter >,
  document.getElementById('root')
)
