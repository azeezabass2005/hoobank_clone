import React from 'react'
import { quotes } from '../assets'
import { feedback } from '../constants'

const FeedbackCard = ({content, name, title, img }) => {
  return (
    <div className={`flex flex-col w-[320px] py-5 px-7 feedback-card rounded-[20px] cursor-pointer z-[3]`} >
      <img src={quotes} alt="quotes" className={`h-[40px] w-[40px] object-contain`}/>
      <p className={`text-white font-poppins text-[20px] mt-7 mb-7`}>
        {content}
      </p>
      <div  className={`flex`}>
        <img src={img} alt="image" className={`w-[60px] h-[60px] object-contain rounded-full mr-7`} />
        <div>
          <h4 className={`text-white text-[22px] font-semibold`}>
            {name}
          </h4>
          <p className={`text-dimWhite text-[18px]`}>
          {title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard