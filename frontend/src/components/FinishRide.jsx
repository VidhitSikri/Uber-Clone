import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FinishRide = (props) => {


  const navigate = useNavigate()



  async function endRide() {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {
      rideId: props.ride._id,
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    })


    if(response.status === 200) {
      props.setFinishRidePanel(false);
      navigate('/captain-home')
    }



  }




  return (
    <div className="h-screen">
      <h5
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
        className="p-3 text-center w-[93%] absolute top-0 text-gray-500"
      >
        <i className="text-xl ri-arrow-down-s-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        finish this ride
      </h3>

      <div className="mt-3 flex items-center justify-between gap-5 pl-2 pr-2 pt-2 pb-2 rounded-lg bg-yellow-400">
        <div className="flex items-center gap-5">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8146Eq20RNZtIptJW65OV97CxVGvSUoIESg&s"
            alt=""
          />
          <h2 className="text-lg font-medium">{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2km</h5>
      </div>

      <div className="flex gap-3 justify-between flex-col items-center">
        <div className="w-full flex flex-col gap-5 mt-5">
          <div className="flex items-center gap-5 p-2 border-b-2 border-gray-300">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">pickup</h3>
              <p className="text-sm -mt-1 text-gray-600">
                {props.ride?.pickup}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2 border-b-2 border-gray-300">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">destination</h3>
              <p className="text-sm -mt-1 text-gray-600">
                {props.ride?.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 pt-2 pl-2">
            <i className="ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">{props.ride?.fare}</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 w-full">
        <button 

            onClick={endRide}
            type="submit"
            className="w-full flex items-center justify-center  mb-2 mt-8 hover:bg-black hover:text-white  bg-green-500  text-white font-semibold rounded-lg py-3 transition duration-300"
        >
            Finish ride
        </button>
        </div>
      </div>
    </div>
  )
}

export default FinishRide
