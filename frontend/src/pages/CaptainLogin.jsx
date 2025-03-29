import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { captain , setCaptain} = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = {
      email: email,
      password: password
    }
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData)

    if(response.status === 200){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }
    
    if(response.status === 404){
      alert("Captain not found");
    }

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
            <p className='text-center mb-7'>Join the fleet? <Link to='/captain-signup' className='text-blue-600'>Create new account</Link></p>
          </div>
          <div>
            <Link to="/login" className='bg-[#d5622d] flex justify-center items-center text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-gray-400
            border-gray-400 placeholder:text-base'>Sign in as User! </Link>
          </div>
        </div>
  )
}

export default CaptainLogin
