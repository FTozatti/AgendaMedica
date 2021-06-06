import React from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Login from './pages/Login'
import Home from './pages/Home'
import ListagemConsulta from './pages/ListagemConsulta';
import Consulta from './pages/Consulta';
import Medico from './pages/Medico';

function App() {
  return (
    <div className="app">
      {/* <Login/> */}
      <Router>
        <Switch>
        <Route path="/Medico">
            <Medico />
          </Route>
          <Route path="/Consulta">
            <Consulta />
          </Route>
          <Route path="/ListagemConsulta">
            <ListagemConsulta />
          </Route>
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
