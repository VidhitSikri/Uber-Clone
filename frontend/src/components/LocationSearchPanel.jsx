import React from 'react'

const LocationSearchPanel = (props) => {
  const locations =[
    "24B, Near Kapoor's cafe , Sheriyan's Coding School, Bhopal",
    "22B, Near Malhotra's cafe , Sheriyan's Coding School, Bhopal",
    "20A, Near Singhania's cafe , Sheriyan's Coding School, Bhopal",
    "20C, Near Sharma's cafe , Sheriyan's Coding School, Bhopal",
  ]





  return (
    <div className='flex flex-col gap-5'>
      {
        locations.map(function(elem,index){
          return <div key={index} onClick={()=>{
            props.setVehicle(true)
            props.setPanel(false)
            }} className='flex border-2  p-3 border-gray-50 active:border-black rounded-xl my-2 items-center justify-start gap-5'>
          <h2><i className="ri-map-pin-fill"></i></h2>
          <h4 className='font-medium'>{elem}</h4>
        </div>
        })
      }
    </div>
  )
}

export default LocationSearchPanel
