import React, { useState } from 'react'
import './home.css'

function Home() {

   return (
      <div>
         <nav id="Navegacao">
            <div class="area">
            <a href="/Home">
               <h1 class="logo2"><img src="../images/logosaude2.png" width="45" height="45" /></h1>
               <h3 class="logo"><span class="preto">Agenda Médica</span></h3>
            </a>
            <div class="menuu">
               <a class="iazul" href="/Login"><i class="fas fa-sign-in-alt"></i> Login</a>
            </div>
            </div>
         </nav>

         <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={{ maxHeight: '500px' }} >
         <ol class="carousel-indicators">
           <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
         </ol>
         <div class="carousel-inner">
           <div class="carousel-item active">
             <img class="d-block w-100" src="../images/banner1.png" alt="" />
           </div>
           <div class="carousel-item">
             <img class="d-block w-100" src="../images/banner2.png" alt="" />
           </div>
           <div class="carousel-item">
             <img class="d-block w-100" src="../images/banner3.png" alt="" />
           </div>
         </div>
         <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="sr-only">Previous</span>
         </a>
         <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
           <span class="sr-only">Next</span>
         </a>
         </div>


         <div id="areapri" style={{ width: '100%' }} >
          <div class="pgini">
            <div class="container">
              <ul class="list-image">
                <li>
                  <div class="container_imagem">
                    <img src="../images/exame.png" alt="" class="image_" />
                    <div class="information_image">
                      <a href="http://localhost:3000/consulta">
                        <button class ="teste"> Agendar Consulta</button>
                      </a>
                    </div>
                  </div>
                </li>
         
                <li>
                  <div class="container_imagem">
                    <img src="../images/prontuario.png" alt="" class="image_" />
                    <div class="information_image">
                    <a href="http://localhost:3000/AlterarUsuario">
                      <button class ="teste"> Alterar Cadastro</button>
                      </a>
                    </div>
                  </div>
                </li>
         
                <li>
                  <div class="container_imagem">
                    <img src="../images/maletateste.png" alt="" class="image_" />
                    <div class="information_image">
                    <a href="http://localhost:3000/medico">
                      <button class ="teste"> Cadastrar Médico</button>
                      </a> 
                    </div>
                  </div>
                </li>
          
              </ul>
            </div>
            <footer style={{ backgroundColor: '#90c7ec', color: '#080808', padding: '10px', marginTop: '15px' }} >
              <center>
                <h4><img src="../images/logosaude2.png" width="35" height="35" /> Agradecemos a visita</h4>
              </center>
            </footer>
          </div>
        </div>
      </div>
   )
}

export default Home