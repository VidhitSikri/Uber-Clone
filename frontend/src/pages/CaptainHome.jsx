import React, { useRef, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../components/ConfirmRidePopup";
import { useContext } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { SocketContext } from "../context/SocketContext";
import axios from "axios";

const CaptainHome = () => {

  const { sendMessage, recieveMessage } = useContext(SocketContext);
  const { captain } = useContext(CaptainDataContext);

  const [ridePopUpPanel, setRidePopUpPanel] = useState(false);
  const [confrimRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const [ride, setRide] = useState(null);



  useEffect(() => {
      sendMessage('join', {userType: "captain", userId: captain._id})
      console.log( captain, captain._id);


      const updateLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {


              console.log({
                location: {
                  ltd: position.coords.latitude,
                  lng: position.coords.longitude
                }
              })

                sendMessage('update-location-captain', {

                  

                  
                    userId: captain._id,
                    location: {
                        ltd: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                })
            })
        }
    }

    const locationInterval = setInterval(updateLocation, 10000)
    updateLocation()


    },[])

    recieveMessage('new-ride', (data) => {
      console.log(data);
      setRide(data);
      setRidePopUpPanel(true);

    });





  const ridePopUpref = useRef(null);
  const confirmRidePopUpref = useRef(null);




  async function confirmRide() {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`, {
      rideId: ride._id,
      captainId: captain._id,
      
      
    },{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

  useGSAP(() => {
    if(ridePopUpPanel){
      gsap.to(ridePopUpref.current, {
        transform: "translateY(0%)",
      })
    }
    else{
      gsap.to(ridePopUpref.current, {
        transform: "translateY(100%)",
      })
    }
  },[ridePopUpPanel]);






  useGSAP(() => {
    if(confrimRidePopUpPanel){
      gsap.to(confirmRidePopUpref.current, {
        transform: "translateY(0%)",
      })
    }
    else{
      gsap.to(confirmRidePopUpref.current, {
        transform: "translateY(100%)",
      })
    }
  },[confrimRidePopUpPanel]);



  return (
    <div className="h-screen relative overflow-hidden">
      {/* Header */}
      <div className="fixed p-3 top-0 flex items-center justify-between w-full  z-20">
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
      <div ref={ridePopUpref} 
        className="fixed translate-y-full bottom-0 left-0 w-full z-30 bg-white px-5 py-12 rounded-t-2xl "
        style={{ height: "65%" }}
      >
        <RidePopup ride={ride} ridePopUpPanel={ridePopUpPanel} setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} confirmRide={confirmRide} />
      </div>
      <div ref={confirmRidePopUpref} 
        className="fixed translate-y-full bottom-0 left-0 w-full z-30 bg-white px-5 py-12 rounded-t-2xl "
        style={{ height: "100%" }}
      >
        <ConfirmRidePopup ride={ride} ridePopUpPanel={ridePopUpPanel} setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
      </div>
    </div>
  );
};

export default CaptainHome;
