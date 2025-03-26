import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1538563188159-070c4db2bc65?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full '>
        <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className='bg-white py-5 px-4 pb-7'>
          <h2 className='text-3xl font-bold ml-4'>Get Started with Uber</h2>
          <Link className=' flex items-center justify-center w-full bg-black text-white py-2 rounded-3xl mt-4' to="/login">Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
