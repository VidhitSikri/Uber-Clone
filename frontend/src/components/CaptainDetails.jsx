import React, { useContext} from 'react'
import { CaptainDataContext} from '../context/CaptainContext'

const CaptainDetails = () => {

  const { captain } = useContext(CaptainDataContext);

  return (
    <div>
      <div className='flex items-center justify-between'>
          <div className='flex items-center gap-5 justify-start'>
            <img className='h-10 w-10 rounded-full object-cover' src="https://media.istockphoto.com/id/1413761196/photo/happy-mature-man-driving-car.jpg?s=612x612&w=0&k=20&c=cHortB6t2CuIicx-UzOiq2jyfXufja9vETTN9dmThG4=" alt="" />
            <h4 className='text-lg font-medium capitalize'>{captain.fullname.firstname} {captain.fullname.lastname}</h4>
          </div>
          <div>
            <h4 className='text-xl font-semibold'>$200.29</h4>
            <p className='text-sm  text-gray-600'>Earned</p>
          </div>
        </div>
        <div className='flex p-2 mt-6 bg-gray-200 rounded-xl gap-3 justify-center items-start'>


          <div className='text-center'>
            <i className="text-3xl mb-2 font-thin ri-time-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>


          <div className='text-center'>
            <i className="text-3xl mb-2 font-thin ri-speed-up-fill"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>


          <div className='text-center'>
            <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>


        </div>
    </div>
  )
}

export default CaptainDetails
