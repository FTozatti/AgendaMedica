import React from 'react';
import axios from 'axios';
import './cadastro.css'

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            datanasc: "",
            cpf: "",
            telefone: "",
            email: "",
            endereco: "",
            bairro: "",
            cidade: "",
            cep: "",
            senha: ""
        }
    }

    handleChange = event => {
        this.setState({ nome: event.target.value });
        this.setState({ datanasc: event.target.value });
        this.setState({ cpf: event.target.value });
        this.setState({ telefone: event.target.value });
        this.setState({ email: event.target.value });
        this.setState({ endereco: event.target.value });
        this.setState({ bairro: event.target.value });
        this.setState({ cidade: event.target.value });
        this.setState({ cep: event.target.value });
        this.setState({ senha: event.target.value });
    }

     handleSubmit = event => {
        event.preventDefault();
        
        var usuario = {
            nome: this.state.nome,
            datanasc: this.state.datanasc,
            cpf: this.state.cpf,
            telefone: this.state.telefone,
            email: this.state.email,
            endereco: this.state.endereco,
            bairro: this.state.bairro,
            cidade: this.state.cidade,
            cep: this.state.cep,
            senha: this.state.senha,
        };

        axios.post('http://localhost:3001/usuarios', { usuario })            
          .then(response => {
                this.setState({
                  nome: response.usuario.nome,
                  datanasc: response.usuario.datanasc,
                  cpf: response.usuario.cpf,
                  telefone: response.usuario.telefone,
                  email: response.usuario.email,
                  endereco: response.usuario.endereco,
                  bairro: response.usuario.bairro,
                  cidade: response.usuario.cidade,
                  cep: response.usuario.cep,
                  senha: response.usuario.senha,
                });
                console.log(response.usuario);
                console.log("entrou");
              })
              .catch(e => {
                console.log(e);
                console.log("deu ruim");
              });
    }
    render() {
        return (
            <div>
            <nav id="Navegacao">
            <div class="area">
                    <h1 class="logo2"><img src="img/logosaude2.png" width="45" height="45"></img></h1>
                    <h3 class="logo"><span class="preto">Agenda Médica</span></h3>
                <div class="menuu">
                    Página Inicial
                </div>
            </div>
            </nav>
            <div id="area">
                <form id="formulario" onSubmit={this.handleSubmit}>
                    <fieldset>
                    <legend>Preencha os dados abaixo para realizar o cadastro</legend>
                    <label>
                        Nome:<input type="text" name="nome" onChange={this.handleChange} />
                    </label>
                    <label>
                        Data Nasc:<input type="text" name="datanasc" onChange={this.handleChange} />
                    </label><br/>
                    <label>
                        CPF:<input type="text" name="cpf" onChange={this.handleChange} />
                    </label><br/>
                    <label>
                        Telefone:<input type="text" name="telefone" onChange={this.handleChange} />
                    </label><br/>
                    <label>
                        Email:<input type="text" name="email" onChange={this.handleChange} />
                    </label><br/>
                    <label>
                        Endereço:<input type="text" name="endereco" onChange={this.handleChange} />
                    </label><br/>
                    <label>
                        Bairro:<input type="text" name="bairro" onChange={this.handleChange} />
                    </label><br/>
                    <label>
                        Cidade:<input type="text" name="cidade" onChange={this.handleChange} />
                    </label><br/>
                    <label>
                        Cep:<input type="text" name="cep" onChange={this.handleChange} />
                    </label><br/>
                    <label>
                        Senha:<input type="password" name="senha" onChange={this.handleChange} />
                    </label><br/>
                    <button type="submit">Cadastrar</button>
                    </fieldset>
                </form>
            </div>
        </div>
        )
    }
}
export default User