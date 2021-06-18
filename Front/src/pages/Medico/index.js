import React, { useState } from 'react'

function Medico() {
    return (
        <div>
        <nav id="Navegacao">
            <div class="area">
            <a href="/">
                <h1 class="logo2"><img src="../images/logosaude2.png" width="45" height="45" /></h1>
                <h3 class="logo"><span class="preto">Agenda Médica</span></h3>
            </a>
            <div class="menuu">
                <a class="iazul" href="/"><i class="fas fa-home"></i> Pagina Inicial</a>
            </div>
            </div>
        </nav>

        <h1 style={{textAlign: "center"}}>Cadastro de Médico</h1>
        

        <div style={{ padding: "26px" }}>
            <form>
            <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="inputNome">Nome Completo</label>
                            <input type="text" class="form-control" id="inputNome" placeholder="Nome Completo" />
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputDatanasc">Data de Nascimento</label>
                            <input type="text" class="form-control" id="inputDatanasc" placeholder="Data de nascimento" />
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputCPF">CPF</label>
                            <input type="text" class="form-control" id="inputCPF" placeholder="CPF" />
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputTelefone">Telefone</label>
                            <input type="text" class="form-control" id="inputTelefone" placeholder="Telefone" />
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="inputEmail">Email</label>
                        <input type="email" class="form-control" id="inputEmail" placeholder="Email" />
                    </div>

                    <div class="form-group">
                        <label for="inputAddress">Endereço</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Apartamento, hotel, casa, etc." />
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="inputAddress2">Bairro</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Bairro" />
                        </div>
                    
                        <div class="form-group col-md-3">
                            <label for="inputCity">Cidade</label>
                            <input type="text" class="form-control" id="inputCity" placeholder="..." />
                        </div>
                        {/* <div class="form-group col-md-4">
                            <label for="inputEstado">Estado</label>
                            <select id="inputEstado" class="form-control" >
                            <option selected>Escolher...</option>
                            <option>...</option>
                            </select>
                        </div> */}
                        <div class="form-group col-md-3">
                            <label for="inputCEP">CEP</label>
                            <input type="text" class="form-control" id="inputCEP" placeholder="..." />
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputSenha">Senha</label>
                            <input type="password" class="form-control" id="inputSenha" placeholder="Senha" />
                        </div>
                        
                    </div>
                <div class="form-row">
                <div class="form-group col-md-2">
                <label for="inputDate">CRM</label><br/>
                <input id="crm" class="form-control"  type="text"/>
                </div>

                <div class="form-group col-md-2">
                <label for="inputEspecialidade">Especialidade Médica</label>
                <select id="inputEspecialidade" class="form-control">
                    <option selected>Escolher...</option>
                    <option>Pediatria</option>
                    <option>Radiologia</option>
                    <option>Epidemiologia</option>
                    <option>Cardiologia</option>
                    <option>Neurologia</option>
                </select>
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

export default Medico