import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Register = () => {
  const [username,setUsername] = useState('') ;
  const [email,setEmail] =useState('') ;
  const [password,setPassword] = useState('') ;

  const handleSubmit = (e) =>{
     e.preventDefault() ;

     axios.post('http://localhost:3003/api/auth/signup',{
        username,
        email,
        password
     }).then((res)=>{
      console.log(res) ;
     })
  }
  return (
    <div className="form-container">
    <form onSubmit={handleSubmit} className="beautiful-form">
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        required
        autoComplete="off"
      />

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
      <Link className='btn' to='/login'>Login</Link>
    </form>
  </div>
  )
}

export default Register
