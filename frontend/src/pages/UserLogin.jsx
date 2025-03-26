import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password
    })
    setEmail("");
    setPassword("");
  }


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-16 ml-3 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <h3 className='text-lg mb-2 font-medium'>What's your email</h3>


        <input 
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-gray-400
         border-gray-400 placeholder:text-base'
         value={email}
         onChange={(e) => setEmail(e.target.value)}
          required 
          type="email" 
          placeholder='email@example.com'
        />


        <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>


        <input 
          required 
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-gray-400
         border-gray-400 placeholder:text-base'
          type="password" 
          placeholder='password'
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
        />


        <button className='bg-[#111] text-white font-semibold mb-1 rounded px-4 py-2  w-full text-lg placeholder:text-gray-400
        border-gray-400 placeholder:text-base'>Login</button>
      </form>
        <p className='text-center mb-7'>new here? <Link to='/signup' className='text-blue-600'>Create new account</Link></p>
      </div>
      <div>
        <Link to="/captain-login" className='bg-[#10b461] flex justify-center items-center text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-gray-400
        border-gray-400 placeholder:text-base'>Sign in as Captain! </Link>
      </div>
    </div>
  )
}

export default UserLogin
