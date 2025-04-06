import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 onClick={()=>{props.setVehicle(false)}} className="p-3 text-center w-[93%] absolute top-0 text-gray-500"><i className="text-xl ri-arrow-down-s-line"></i></h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>


        <div onClick={()=>{
          props.setConfirmRide(true)
          props.selectVehicle("car")
          }} className="flex active:border-2 active:border-black bg-gray-100 mb-2 rounded-xl w-full justify-between items-center p-3">
          <img className="h-12" src="data:image/jpeg;base64,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" alt="" />
          <div className="">
            <h4 className="font-medium text-base">UberGo <span><i className="ri-user-line"></i>4</span></h4>
            <h5 className="font-medium text-sm">2 MINS AWAY</h5>
            <p className="font-normal text-xs">Affordable, compact rides</p>
          </div>
          <h2 className="text-xl font-semibold">₹{props.fare.car}</h2>
        </div>
        <div onClick={()=>{
          
          props.setConfirmRide(true)
          props.selectVehicle("moto")
          }} className="flex active:border-2 active:border-black bg-gray-100 mb-2 rounded-xl w-full justify-between items-center p-3">
          <img className="h-16" src="data:image/jpeg;base64,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" alt="" />
          <div className="">
            <h4 className="font-medium text-base">Moto <span><i className="ri-user-line"></i>1</span></h4>
            <h5 className="font-medium text-sm">4 MINS AWAY</h5>
            <p className="font-normal text-xs">Affordable, motorcycle rides</p>
          </div>
          <h2 className="text-xl font-semibold">₹{props.fare.moto}</h2>
        </div>
        <div onClick={()=>{props.setConfirmRide(true)
          props.selectVehicle("auto")
        }} className="flex active:border-2 active:border-black bg-gray-100 mb-2 rounded-xl w-full justify-between items-center p-3">
          <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className="">
            <h4 className="font-medium text-base">UberAuto <span><i className="ri-user-line"></i>3</span></h4>
            <h5 className="font-medium text-sm">7 MINS AWAY</h5>
            <p className="font-normal text-xs">Affordable, Auto rickshaw rides</p>
          </div>
          <h2 className="text-xl font-semibold">₹{props.fare.auto}</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
