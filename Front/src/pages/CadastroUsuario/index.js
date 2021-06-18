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
    handleChangeNome = event => {
        this.setState({ nome: event.target.value });
    }
    handleChangeDatanasc = event => {
        this.setState({ datanasc: event.target.value });
    }
    handleChangeCpf = event => {
        this.setState({ cpf: event.target.value });
    }
    handleChangetelefone = event => {
        this.setState({ telefone: event.target.value });
    }
    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    }
    handleChangeEndereco = event => {
        this.setState({ endereco: event.target.value });
    }
    handleChangeBairro = event => {
        this.setState({ bairro: event.target.value });
    }
    handleChangeCidade = event => {
        this.setState({ cidade: event.target.value });
    }
    handleChangeCep = event => {
        this.setState({ cep: event.target.value });
    }
    handleChangeSenha = event => {
        this.setState({ senha: event.target.value });
    }
    
    handleSubmit = event => {
        event.preventDefault();
        
        var axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                "Access-Control-Allow-Headers": "*"
            }
        };
        axios.post('http://localhost:3001/usuarios',{
            nome: this.state.nome,
            datanasc: this.state.datanasc,
            cpf: this.state.cpf,
            telefone: this.state.telefone,
            email: this.state.email,
            endereco: this.state.endereco,
            bairro: this.state.bairro,
            cidade: this.state.cidade,
            cep: this.state.cep,
            senha: this.state.senha
        }
        , axiosConfig) 
        .then(response => {
            console.log(response.data)
            alert("Cadastrado com sucesso")

        })
        .catch(e => {
            console.log(e)
            alert("Algo deu errado. Tente novamente!")                
        });   
    }
    render() {
        return (
            <div>
            <nav id="Navegacao">
                <div className="area">
                <a href="/Home">
                    <h1 className="logo2"><img src="../images/logosaude2.png" width="45" height="45" /></h1>
                    <h3 className="logo"><span className="preto">Agenda Médica</span></h3>
                </a>
                <div className="menuu">
                    <a className="iazul" href="/Home"><i className="fas fa-home"></i> Pagina Inicial</a>
                </div>
                </div>
            </nav>
    
            <h1 style={{textAlign: "center"}}>Cadastro de Usuario</h1>
            
    
            <div style={{ padding: "26px" }}>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label htmlFor="inputNome">Nome Completo</label>
                            <input type="text" className="form-control" id="inputNome" placeholder="Nome Completo" onChange={this.handleChangeNome}/>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputDatanasc">Data de Nascimento</label>
                            <input type="text" className="form-control" id="inputDatanasc" placeholder="Data de nascimento" onChange={this.handleChangeDatanasc}/>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputCPF">CPF</label>
                            <input type="text" className="form-control" id="inputCPF" placeholder="CPF" onChange={this.handleChangeCpf}/>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputTelefone">Telefone</label>
                            <input type="text" className="form-control" id="inputTelefone" placeholder="Telefone" onChange={this.handleChangetelefone}/>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="inputEmail">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" onChange={this.handleChangeEmail}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputAddress">Endereço</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Apartamento, hotel, casa, etc." onChange={this.handleChangeEndereco}/>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label htmlFor="inputAddress2">Bairro</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Bairro" onChange={this.handleChangeBairro}/>
                        </div>
                    
                        <div className="form-group col-md-3">
                            <label htmlFor="inputCity">Cidade</label>
                            <input type="text" className="form-control" id="inputCity" placeholder="..." onChange={this.handleChangeCidade}/>
                        </div>
                        {/* <div className="form-group col-md-4">
                            <label htmlFor="inputEstado">Estado</label>
                            <select id="inputEstado" className="form-control" onChange={this.handleChange}>
                            <option selected>Escolher...</option>
                            <option>...</option>
                            </select>
                        </div> */}
                        <div className="form-group col-md-3">
                            <label htmlFor="inputCEP">CEP</label>
                            <input type="text" className="form-control" id="inputCEP" placeholder="..." onChange={this.handleChangeCep}/>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputSenha">Senha</label>
                            <input type="password" className="form-control" id="inputSenha" placeholder="Senha" onChange={this.handleChangeSenha}/>
                        </div>
                        
                    </div>
                    <br/>
                    <br/>
    
                    <div style={{textAlign: "center"}}>
                        <button type="submit"  className="btn btn-secondary" onClick={this.handleSubmit}>Confirmar</button>
                    </div>
    
                </form>
            </div>
        </div>
        )
    }
}
export default User

