import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  const [email,setEmail] =useState('') ;
  const [password,setPassword] = useState('') ;

  const loginSubmit = (e)=>{
     e.preventDefault() ;
     axios.post('http://localhost:3002/api/auth/login',{
       email,
       password
     }).then((res)=>{
       console.log(res) ;
     })

  }
  return (
    <div className="form-container">
    <form onSubmit={loginSubmit} className="beautiful-form">
     
    
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
        autoComplete="off"
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        required
        autoComplete="off"
      />

      <button type="submit">Submit</button>
      <Link className='btn' to='/'>Create an Account</Link>
    </form>
  </div>
  )
}

export default Login
