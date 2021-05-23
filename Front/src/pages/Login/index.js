import React, { useState } from 'react'
import './login.css'
import axios from 'axios';
import { useHistory } from "react-router-dom";


import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";

import { MdEmail, MdLock } from "react-icons/md"
import { HiEye, HiEyeOff } from "react-icons/hi"


function Login() {
   const history = useHistory();
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [show, setShow] = useState(false)
   
   handleSubmit = event => {
      event.preventDefault();
  
      const user = {
        email: this.state.email,
        password: this.state.password
      };
   }
   
   function goHome(){
      console.log("Entrou")
      axios.post(`http://localhost:3001/login?emailUser=gabiteste@gmail.com&senhaUser=teste1234`)
      .then(res => {
         if (res.data != null){
            history.push('Home')
         }
         else{
            console.log("Não válido")
            
         }
      })
      
   }
   
   return (
      <div className="login">
      <div className="login-logo">
      <img
      src="../images/banner-login.png"
      alt="Banner do site Agenda Médica"
      />
      </div>
      
      <div className="login-right">
      <h1>LOGIN</h1>
      
      <div className="login-loginInputEmail">
      <MdEmail />
      <input
      type="email"
      placeholder="Digite um email"
      value={email}
      onChange={e => setEmail(e.target.value)}
      />
      </div>
      
      <div className="login-loginInputPassword">
      <MdLock />
      <input
      placeholder="Digite sua senha"
      type={show ? "text" : "password"}
      value={password}
      onChange={e => setPassword(e.target.value)}
      />
      <div className="login-eye">
      {show ? (
         <HiEye
         size={20}
         onSubmit={handleClick}
         />
         ) : (
            <HiEyeOff
            size={20}
            onSubmit={handleClick}
            />
            )}
            </div>
            </div>
            
            <button type="submit" onSubmit={goHome}>Entrar
            {/* <Link to="Home" style={{ textDecoration: 'none', color: 'white' }}>Entrar </Link> */}
            </button>
            
            <h4>Não tem conta?</h4>
            
            <button type="submit">
            Cadastrar
            </button>
            </div>
            </div>
            )
         }
         
         export default Login