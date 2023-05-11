import React from 'react'
import { bill, apple, google } from '../assets'
import styles from '../styles'
import { layout } from '../styles'

const Billing = () => {
  return (
    <div className={`${layout.sectionReverse} md:${styles.flexCenter} sm:${styles.paddingX}`}>
      <div className={`${layout.sectionImgReverse} relative`}>
        <img src={bill} alt="bill" className='relative z-[5]' />
        <div className='blue__gradient absolute top-0 right-[20%] h-[30%] w-[30%] z-[0] rounded-full' />
        <div className='pink__gradient absolute top-[10%] right-[10%] h-[40%] w-[35%] z-[1] rounded-full' />
        <div className='white__gradient absolute top-[15%] right-[10%] h-[40%] w-[40%] z-[3] rounded-full' />

      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Easily control your <br className={`sm:flex hidden`} />
          billing and invoicing
        </h2>
        <p className={`${styles.paragraph} sm:mt-6 mt-0 sm:leading-[38px] max-w-[455px]`}>
          Elit enim sed massa etiam. Mauris eu adipiscing 
          ultrices ametodio aenean neque. Fusce ipsum orci 
          rhoncus aliporttitor integer platea placerat.
        </p>
        <div className={`flex mt-5`}>
          <img src={apple} alt="apple store" className={`sm:mr-6`} />
          <img src={google} alt="google store" />
        </div>
      </div>
    </div>
  )
}

export default Billing