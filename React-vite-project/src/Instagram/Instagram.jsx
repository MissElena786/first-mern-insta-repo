import React, {  useState } from 'react'
import "./Instagram.css"
import './MediaQuery.css'
// import useNavigate from 'react-router-dom'
import {  Link } from "react-router-dom";

// import axios form "axios"

function  Instagram() {

   // const navigate = useNavigate()  
      const [mobile , setMobile] = useState("")
      const [fullName , setFullName] = useState("")
      const [email , setEmail] = useState("")
      const [password , setPassword] = useState("")
      const [message , setMessage] = useState("")
   


   let handleSubmit = async  (e)=>{
      e.preventDefault();
      try {
         let res = await fetch("http://localhost:5000/instagram/insta-register", {
            method : "POST",
            headers : {"content-type" : "application/json"},
            body :JSON.stringify({
               mobile : mobile,
               fullName : fullName,
               email: email,
               password :password
            })
         })
         let resJson = await res.json();
         if(res.status === 200){
            setMobile("")
            setFullName("")
            setEmail("")
            setPassword("")
            setMessage("User created successfully")
         }else if(res.status == 401){
            setMessage("All fields are required")
         }else if(res.status == 500){
            setMessage("This email is already exist ")
         }
         else{
            setMessage("Some error Occured")
         }
      } catch (e) {
         console.log(e);
      }
   }

// const  diffToast = ()=>{
//    alert("sighn up success")
// }


  return (
  <div className='container'>
         <div className='insta-top'>
            <h1 className='insta-heading'>Instagram</h1>
            <p className='top-para'>Sign up to see photos and videos from your friends</p>
            <button className='facebook'>
            <i class="bi bi-facebook"></i> &nbsp; 
             Login with facebook</button>
             
         </div>
         <div className='break'>
         <div className='start-b'></div>OR<div className='end-b'></div>
         </div>
        
      
         <form  onSubmit={handleSubmit} method='post' className='form'>
            <input type='number' value={mobile} onChange={(e)=>setMobile(e.target.value)} name="mobile"  placeholder='Mobile number or email address'/><br/>
            <input type='text'  value={fullName} onChange={(e)=>setFullName(e.target.value)}  name="fullName"  placeholder='Full Name' /><br/>
            <input type='email' placeholder='Username '  value={email} onChange={(e)=>setEmail(e.target.value)} name="email"  /><br/>
            <input type='password' placeholder='Password'  value={password} onChange={(e)=>setPassword(e.target.value)}  name='password'/>
            <div >
            <p className="form-para">People who use our service may have uploadd your contact information to Instagram. Learn more
             By signing up, you agree to our <a>Terms, Privacy Policy</a>  and <a> Cookies Policy</a>.</p>
            </div>
            <div className="msg">
               {message ? <p>{message}</p> : null}
            </div>
            <button type='submit' /* onClick={diffToast} */  className='sign-up'>Sign Up</button>


         </form>
         <div className='insta-bottom'>
           
            <p className='bottom-login'>Have an account ?  &nbsp;  
             {/* <a href='/login' className='login' >Log In</a> */}
             <Link to="/login">
               Log In
             </Link>
            </p>
         </div>
  </div>
  )
}

export default Instagram
