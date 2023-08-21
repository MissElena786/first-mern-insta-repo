import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Instagram.css"
import './MediaQuery.css'
import { useNavigate } from 'react-router-dom'


function InstaLogin() {

 
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [message, setMessage] = useState("")
const [login, setLogin] = useState(false)
const navigate = useNavigate()

let HandleLoginSubmit = async (e)=>{
  e.preventDefault();

  try {
    let res = await fetch("http://localhost:5000/instagram/insta-login", {
      method : "POST",
      headers : {"content-type" : "application/json"},
      body :JSON.stringify({

         email: email,
         password :password
      })
   })
  //  let resJson = await res.json();
         if(res.status === 200){
            setEmail("")
            setPassword("")
            setLogin(true)
            setMessage("User Logged In successfully")
            navigate("/insta-welcome")
         }else if(res.status === 500){
          setMessage("password is note matched")
         }else if(res.status === 400){
          setMessage("user not registered")
         }else if(res.status === 401){
          setMessage("email and password is required")
         }
         else{
            setMessage("some error accured")
         }
         
  } catch (e) {
    console.log(e, e.message);
  }
}


  return (

    <div className='container'>
      <div>
        <h1 className='insta-heading'>Instagram</h1>
      </div>
      <form onSubmit={HandleLoginSubmit}   method='post' >
        <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} name='email' placeholder='Phone number, Username email address ' /><br />
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}  name='password' placeholder='Password' />
        <button type='submit'   className='login-btn'>Log In</button>
        <div className="message">{message ? <p>{message}</p> : null }</div>
       
      </form>
      <div className='break'>
        <div className='start-b'></div>OR<div className='end-b'></div>
      </div>
      <div className='login-para' >
        <i class="bi bi-facebook"></i> &nbsp;Login with Facebook
        <p>Forgoton your Password </p>
      </div>
      <div> <p className='bottom-login'> Dont't have an account ?  &nbsp; <a href='/' className='login' >Sign Up</a></p>
      </div>

    </div>
  )
}

export default InstaLogin
