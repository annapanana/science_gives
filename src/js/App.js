import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Styles
// import 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.css';

// Shared Components
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'

// Pages
import Body from './components/pages/Body'

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={Body}/>
    </div>
  </Router>
), document.getElementById('app'));
