import React from 'react';
import './App.css';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
    <div className="app">
      {/* <Login/> */}
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
