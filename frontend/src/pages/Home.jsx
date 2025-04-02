import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitForDriver from "../components/WaitForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panel, setPanel] = useState(false);
  const [vehicle, setVehicle] = useState(false);
  const [confirmRide, setConfirmRide] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);  
  const [waitingForDriverPanel, setWaitingForDriverPanel] = useState(false);

  const panelRef = useRef(null);
  const panelButtonRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panel) {
      gsap.to(panelRef.current, {
        height: "75%",
        padding: 20,
        duration: 0.5,
      });
      gsap.to(panelButtonRef.current, {
        opacity: 1,
        duration: 0.5,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding: 0,
        duration: 0.5,
      });
      gsap.to(panelButtonRef.current, {
        opacity: 0,
        duration: 0.5,
      });
    }
  }, [panel]);

  useGSAP(() => {
    if(vehicle){
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0%)",
      })
    }
    else{
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      })
    }
  },[vehicle]);


  useGSAP(() => {
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0%)",
      })
    }
    else{
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      })
    }
  },[vehicleFound]);



  useGSAP(() => {
    if(confirmRide){
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(0%)",
      })
    }
    else{
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)",
      })
    }
  },[confirmRide]);


  useGSAP(() => {
    if(waitingForDriverPanel){
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0%)",
      })
    }
    else{
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      })
    }
  },[waitingForDriverPanel]);

  return (
    <div className="relative h-screen overflow-hidden">
      <img
        className="w-16 absolute top-4 left-4"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />

      <div  className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-end w-full absolute top-0 h-screen ">
        <div className="h-[25%] p-5 bg-white relative">
          <h5
            ref={panelButtonRef}
            onClick={() => setPanel(false)}
            className="absolute top-5 right-5 text-2xl opacity-0"
          >
            <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler}>
            <input
              onClick={() => setPanel(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="add a pick-up location"
            />
            <input
              onClick={() => setPanel(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="add a drop-off location"
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white  h-0 ">
          <LocationSearchPanel setPanel={setPanel} setVehicle={setVehicle}/>
        </div>
      </div>

      <div ref={vehiclePanelRef} className="fixed w-full translate-y-full z-10 bottom-0 bg-white px-3 py-6">
        <VehiclePanel setConfirmRide={setConfirmRide} setVehicle={setVehicle}/>
      </div>
      <div ref={confirmRidePanelRef} className="fixed w-full translate-y-full z-10 bottom-0 bg-white px-3 py-6">
        <ConfirmRide setConfirmRide={setConfirmRide} setVehicle={setVehicle} setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={vehicleFoundRef} className="fixed w-full translate-y-full z-10 bottom-0 bg-white px-3 py-6">
        <LookingForDriver setConfirmRide={setConfirmRide} setVehicle={setVehicle} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={waitingForDriverRef} className="fixed w-full  z-10 bottom-0 bg-white px-3 py-6">
        <WaitForDriver waitingForDriverPanel={waitingForDriverPanel} setWaitingForDriverPanel={setWaitingForDriverPanel}/>
      </div>
    </div>
  );
};

export default Home;
