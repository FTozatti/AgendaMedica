import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/CadastroUsuario';
import ListagemConsulta from './pages/ListagemConsulta';
import Medico from './pages/Medico';
import Consulta from './pages/Consulta';
import AlterarUsuario from './pages/AlteracaoUsuario';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/cadastrousuario" component={User} />
                <Route path="/listagemconsulta" exact component={ListagemConsulta} />
                <Route path="/medico" component={Medico} />
                <Route path="/consulta" component={Consulta} />
                <Route path="/alterarusuario" component={AlterarUsuario} />
            </Switch>        
        </BrowserRouter>
    );
};
export default Routes;
