import React from 'react'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`sm:mt-12 mt-6 sm:ml-5 ml-0 cursor-pointer getstarted`}>
      <div className={`h-[180px] w-[180px] rounded-full bg-blue-gradient flex justify-center items-center`}>
        <div className={`h-[170px] w-[170px] rounded-full bg-primary flex justify-center items-center py-9 px-9`}>
          <p className={`text-gradient font-poppins text-[24px] flex flex-wrap`}>
            Get
            <img src={arrowUp} alt="arrowUp" className={`h-[30px] w-[30px] object-contain ml-3`} />Started
          </p>

        </div>
      </div>
    </div>
  )
}

export default GetStarted