import React, { useReducer, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null);

    useGSAP(() => {
        if(finishRidePanel){
          gsap.to(finishRidePanelRef.current, {
            transform: "translateY(0%)",
          })
        }
        else{
          gsap.to(finishRidePanelRef.current, {
            transform: "translateY(100%)",
          })
        }
      },[finishRidePanel]);








  return (
    
    <div className="h-screen relative overflow-hidden">

        
      {/* Header */}
      <div className="fixed  p-3 top-0 flex items-center justify-between w-full  z-20">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <Link
          to={"/home"}
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full shadow-md"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      {/* Main Content */}
      <div className="h-4/5">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="bottom-0 h-[20vh] p-6 flex items-center relative justify-between bg-yellow-400"
      onClick={() => {setFinishRidePanel(true)}}>
      <h5
        onClick={() => {
          props.setRidePopUpPanel(false);
        }}
        className="p-3 text-center w-[93%] top-0 rotate-180 absolute  text-gray-500"
        >
        <i className="text-xl ri-arrow-down-s-line"></i>
      </h5> 
        <h4 className='text-2xl font-semibold'>4 km away</h4>
        <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>complete ride</button>
      </div>

      <div ref={finishRidePanelRef} 
        className="fixed translate-y-full bottom-0 left-0 w-full z-30 bg-white px-5 py-12 rounded-t-2xl "
        style={{ height: "100%" }}
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel}  />
      </div>

    </div>
  )
}

export default CaptainRiding
