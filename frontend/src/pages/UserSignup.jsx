import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'
import {useContext} from 'react'

const UserSignup = () => {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

    const navigate = useNavigate();

    const {user , setUser} = useContext(UserDataContext);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname:{
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password
    }

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser,
      { withCredentials: true } // Enable cookies
  );
    if(response.status === 201){
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate("/home");
    }
    
    
    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");

  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-16 ml-3 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <h3 className='text-lg mb-2 font-medium'>What's your name</h3>
        <div className='flex gap-4 mb-6'>

        <input 
          className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-gray-400
         border-gray-400 placeholder:text-base'
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          required 
          type="text" 
          placeholder='first name'
        />

        <input 
          className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-gray-400
         border-gray-400 placeholder:text-base'
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required 
          type="text" 
          placeholder='Last name'
        />

        </div>
        <h3 className='text-lg mb-2 font-medium'>What's your email</h3>
        <input 
          className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-gray-400
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
          className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-gray-400
         border-gray-400 placeholder:text-base'
          type="password" 
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />


        <button className='bg-[#111] text-white font-semibold mb-1 rounded px-4 py-2  w-full text-lg placeholder:text-gray-400
        border-gray-400 placeholder:text-base'>Sign Up</button>
      </form>
        <p className='text-center mb-6'>Already have an account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
        <p className='text-[10px] leading-tight text-gray-500'>By proceeding you consent to get calls , Whatsapp or SMS messages, including by automated means, from UBER and its affiliates to the number provided. </p>
      </div>
    </div>
  )
}

export default UserSignup
