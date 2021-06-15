import React, { useState } from 'react'
import './login.css'
import axios from 'axios';
import { useHistory } from "react-router-dom";


import { MdEmail, MdLock } from "react-icons/md"
import { HiEye, HiEyeOff } from "react-icons/hi"


function Login() {
   const history = useHistory();
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [show, setShow] = useState(false)
   
   const handleClick = (e) => {
      e.preventDefault()
      setShow(!show);
   }
   

   function goHome(){
      console.log("Entrou")
      axios.get(`http://localhost:3001/login?emailUser=${email}&senhaUser=${password}`)
      .then(res => {
         if (res.data != null){
            history.push('Home')
         }
         else{
            console.log("Não válido")
         }
      })
   
   }
/*
   function goHome(){
      console.log("Entrou")
      console.log(email)
      console.log(password)
      axios.post(`http://localhost:3001/login`, {emailUser: "gabiteste@gmail.com", senhaUser: "teste12345"})
      .then(res => {
         if (res.data != null){
            history.push('/home')
         }
         else{
            console.log("Não válido")
         }
      })
   
   }
*/
   function goUser(){
      history.push('/cadastrousuario')
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
         onClick={handleClick}
         />
         ) : (
            <HiEyeOff
            size={20}
            onClick={handleClick}
            />
            )}
            </div>
            </div>
            
            <button type="submit" onClick={goHome}>Entrar
            {/* <Link to="Home" style={{ textDecoration: 'none', color: 'white' }}>Entrar </Link> */}
            </button>
            
            <h4>Não tem conta?</h4>
            
            <button type="submit" onClick={goUser}>
            Cadastrar
            </button>
            </div>
            </div>
            )
         }
         
         export default Login