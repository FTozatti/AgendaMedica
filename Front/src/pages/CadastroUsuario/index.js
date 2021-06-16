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
                <a href="/Home">
                    <h1 class="logo2"><img src="../images/logosaude2.png" width="45" height="45" /></h1>
                    <h3 class="logo"><span class="preto">Agenda Médica</span></h3>
                </a>
                <div class="menuu">
                    <a class="iazul" href="/Home"><i class="fas fa-home"></i> Pagina Inicial</a>
                </div>
                </div>
            </nav>
    
            <h1 style={{textAlign: "center"}}>Cadastro de Usuario</h1>
            
    
            <div style={{ padding: "26px" }}>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="inputNome">Nome Completo</label>
                            <input type="text" class="form-control" id="inputNome" placeholder="Nome Completo" onChange={this.handleChange}/>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputDatanasc">Data de Nascimento</label>
                            <input type="text" class="form-control" id="inputDatanasc" placeholder="Data de nascimento" onChange={this.handleChange}/>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputCPF">CPF</label>
                            <input type="text" class="form-control" id="inputCPF" placeholder="CPF" onChange={this.handleChange}/>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputTelefone">Telefone</label>
                            <input type="text" class="form-control" id="inputTelefone" placeholder="Telefone" onChange={this.handleChange}/>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="inputEmail">Email</label>
                        <input type="email" class="form-control" id="inputEmail" placeholder="Email" onChange={this.handleChange}/>
                    </div>

                    <div class="form-group">
                        <label for="inputAddress">Endereço</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Apartamento, hotel, casa, etc." onChange={this.handleChange}/>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="inputAddress2">Bairro</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Bairro" onChange={this.handleChange}/>
                        </div>
                    
                        <div class="form-group col-md-3">
                            <label for="inputCity">Cidade</label>
                            <input type="text" class="form-control" id="inputCity" placeholder="..." onChange={this.handleChange}/>
                        </div>
                        {/* <div class="form-group col-md-4">
                            <label for="inputEstado">Estado</label>
                            <select id="inputEstado" class="form-control" onChange={this.handleChange}>
                            <option selected>Escolher...</option>
                            <option>...</option>
                            </select>
                        </div> */}
                        <div class="form-group col-md-3">
                            <label for="inputCEP">CEP</label>
                            <input type="text" class="form-control" id="inputCEP" placeholder="..." onChange={this.handleChange}/>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputSenha">Senha</label>
                            <input type="password" class="form-control" id="inputSenha" placeholder="Senha" onChange={this.handleChange}/>
                        </div>
                        
                    </div>
                    <br/>
                    <br/>
    
                    <div style={{textAlign: "center"}}>
                        <button type="submit"  class="btn btn-secondary">Confirmar</button>
                    </div>
    
                </form>
            </div>
        </div>
        )
    }
}
export default User