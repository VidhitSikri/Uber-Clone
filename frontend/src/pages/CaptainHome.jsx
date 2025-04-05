import React from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";

const CaptainHome = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      {/* Header */}
      <div className="fixed p-3 top-0 flex items-center justify-between w-full bg-white z-20">
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
      <div className="h-1/2">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>

      {/* Ride Popup */}
      <div
        className="fixed bottom-0 left-0 w-full z-30 bg-white px-5 py-6 rounded-t-2xl transition-all duration-500"
        style={{ height: "60%" }}
      >
        <RidePopup />
      </div>
    </div>
  );
};

export default CaptainHome;
