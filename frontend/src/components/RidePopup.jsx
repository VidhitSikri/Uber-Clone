import React from "react";

const RidePopup = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setRidePopUpPanel(false);
        }}
        className="p-3 text-center w-[93%] absolute top-0 text-gray-500"
      >
        <i className="text-xl ri-arrow-down-s-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New ride available!</h3>

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
              <h3 className="text-lg font-medium">Pickup</h3>
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
        <button
          onClick={() => {
            props.setConfirmRidePopUpPanel(true);
            props.confirmRide()
          }}
          className="mt-3 w-full bg-green-500 text-white font-semibold rounded-lg p-2"
        >
          Accept
        </button>
        <button
          onClick={() => {
            props.setRidePopUpPanel(false);
          }}
          className=" w-full bg-gray-300 text-gray-700 font-semibold rounded-lg p-2"
        >
          Ignore
        </button>
      </div>
    </div>
  );
};

export default RidePopup;
