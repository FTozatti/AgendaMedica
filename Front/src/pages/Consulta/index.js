import React, { useState } from 'react'

function Consulta() {
    return (
        <div>
            <nav id="Navegacao">
                <div class="area">
                <a href="/Home">
                    <h1 class="logo2"><img src="../images/logosaude2.png" width="45" height="45" /></h1>
                    <h3 class="logo"><span class="preto">Agenda Médica</span></h3>
                </a>
                <div class="menuu">
                    <a class="iazul" href="/"><i class="fas fa-home"></i> Pagina Inicial</a>
                </div>
                </div>
            </nav>

            <h1 style={{textAlign: "center"}}>Agendamento de Consulta</h1>
            

            <div style={{ padding: "26px" }}>
                <form>
                    <div class="form-row">
                    <div class="form-group col-md-3">
                        <label for="inputEmail4">Nome Completo</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Nome Completo"/>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputPassword4">CPF</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="CPF"/>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputAddress">Telefone</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Telefone"/>
                    </div>
                    </div>
                    
                    <div class="form-group">
                    <label for="inputAddress2">Endereço</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartamento, hotel, casa, etc."/>
                    </div>
                    <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCity">Cidade</label>
                        <input type="text" class="form-control" id="inputCity" placeholder="..."/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputEstado">Estado</label>
                        <select id="inputEstado" class="form-control">
                        <option selected>Escolher...</option>
                        <option>...</option>
                        </select>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputCEP">CEP</label>
                        <input type="text" class="form-control" id="inputCEP" placeholder="..."/>
                    </div>
                    </div>
                    
                    <div class="form-row">
                    <div class="form-group col-md-2">
                    <label for="inputDate">Data de Agendamento</label><br/>
                    <input id="date" type="date"/>
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

export default Consulta
