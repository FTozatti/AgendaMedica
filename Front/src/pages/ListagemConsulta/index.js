import React, { useState } from 'react'

function ListagemConsulta() {
   
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
         
         <h1 style={{textAlign: "center"}}>Listagem de consultas</h1>
    
         <div style={{ padding: "26px" }}>
      
               <table class="table table-hover">
                  <thead>
                     <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Status</th>
                        <th scope="col">Data</th>
                        <th scope="col">Opções</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <th scope="row">1</th>
                        <td>Gabriela</td>
                        <td>Agendado</td>
                        <td>10/10/2021</td>
                        <td>
                           <button style={{marginRight: "16px"}}type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalEditarDataConsuta" aria-pressed="false" autocomplete="off">
                              <i class="far fa-edit"></i>
                           </button>

                           <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalCancelarConsulta" aria-pressed="false" autocomplete="off">
                              <i class="fas fa-minus"></i>
                           </button>
                        </td>
                     </tr>
                  </tbody>
               </table>

         
<div class="modal fade" id="modalCancelarConsulta" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Aviso</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Deseja realmente cancelar a consulta?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
        <button type="button" class="btn btn-primary">Confirmar</button>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="modalEditarDataConsuta" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Editar a data da consulta</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <b>Para qual data você gostaria de alterar?</b>
         <br/>
         <div class="form-row">
         <div class="form-group col-md-4">
          <label for="inputDate">Data de Agendamento</label>
          <input id="date" type="date"/>
         </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
        <button type="button" class="btn btn-primary">Confirmar</button>
      </div>
    </div>
  </div>
</div>


         </div>
      </div>
      )
   }
   
   export default ListagemConsulta
   