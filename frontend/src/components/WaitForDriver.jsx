import React from 'react'

const WaitForDriver = (props) => {
  return (
    <div>
        <h5 onClick={()=>{props.setVehicle(false) 
            props.setConfirmRide(false)
        }} className="p-3 text-center w-[93%] absolute top-0 text-gray-500"><i className="text-xl ri-arrow-down-s-line"></i></h5>

        <div className='flex items-center justify-between'>
            <img className='h-10' src="data:image/jpeg;base64,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" alt="" />
            <div className='text-right'>
                <h2 className='text-lg font-medium'>Sarthak</h2>
                <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
                <p className='text-sm text-gray-600'>Maruti suzuki alto</p>

            </div>
        </div>

        <div className='flex gap-3 justify-between flex-col items-center'>

            <div className='w-full flex flex-col gap-5 mt-5'>
                <div className='flex items-center gap-5 p-2 border-b-2 border-gray-300'>
                    <i className="text-lg ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
                    </div>

                </div>
                <div className='flex items-center gap-5 p-2 border-b-2 border-gray-300'>
                <i className="text-lg ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-2 '>
                <i  className="ri-money-rupee-circle-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>198</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                    </div>
                </div>
                
            </div>
        </div>



    </div>
  )
}

export default WaitForDriver
