import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
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
          <h2 className="text-lg font-medium">Harsh Patel</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2km</h5>
      </div>

      <div className="flex gap-3 justify-between flex-col items-center">
        <div className="w-full flex flex-col gap-5 mt-5">
          <div className="flex items-center gap-5 p-2 border-b-2 border-gray-300">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Ahemdabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2 border-b-2 border-gray-300">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Ahemdabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 pt-2 pl-2">
            <i className="ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">198</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 w-full">
        <Link 
            to={"/captain-home"}
            type="submit"
            className="w-full flex items-center justify-center  mb-2 mt-8 hover:bg-black hover:text-white  bg-green-500  text-white font-semibold rounded-lg py-3 transition duration-300"
        >
            Finish ride
        </Link>
        </div>
      </div>
    </div>
  )
}

export default FinishRide
