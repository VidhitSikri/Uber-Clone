import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ConfirmRidePopup = (props) => {

  const [OTP, setOTP] = useState("")
  const navigate = useNavigate()


  const submitHandler = async (e)=>{
    e.preventDefault()

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
      params: {
        rideId: props.ride._id, // Ensure this is a valid MongoDB ObjectId
        otp: OTP,              // Ensure this matches the ride's OTP
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if(response.status === 200){
      props.setConfirmRidePopUpPanel(false);
      props.setRidePopUpPanel(false);
      navigate('/captain-riding')
    }
  }



  return (
    <div className="h-screen">
      <h5
        onClick={() => {
          props.setConfirmRidePopUpPanel(false);
        }}
        className="p-3 text-center w-[93%] absolute top-0 text-gray-500"
      >
        <i className="text-xl ri-arrow-down-s-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        confirm this ride to start!
      </h3>

      <div className="mt-3 flex items-center justify-between gap-5 pl-2 pr-2 pt-2 pb-2 rounded-lg bg-yellow-400">
        <div className="flex items-center gap-5">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8146Eq20RNZtIptJW65OV97CxVGvSUoIESg&s"
            alt=""
          />
          <h2 className="text-lg font-medium">{props.ride?.user.fullname.firstname}</h2>
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
              <h3 className="text-lg font-medium">Destination</h3>
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
          <form onSubmit={submitHandler}>
            <input
              onChange={(e) => setOTP(e.target.value)}
              value={OTP}
              type="text"
              className="bg-[#eee] px-12 py-4 text-xl rounded-lg w-full mt-3"
              placeholder="Enter OTP"
            />

        <button 
            type="submit"
            className="w-full flex items-center justify-center  mb-2 mt-8 hover:bg-black hover:text-white  bg-green-500  text-white font-semibold rounded-lg py-3 transition duration-300"
        >
  Confirm
</button>
            <button
              onClick={() => {
                props.setConfirmRidePopUpPanel(false);
                props.setRidePopUpPanel(false);
              }}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg py-3 transition duration-300"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopup;
