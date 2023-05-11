import React from 'react'
import { Discount, robot } from '../assets'
import styles from '../styles'
import { layout } from '../styles'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <div className={`${layout.section} ${styles.padding} relative`}>
      <div className={`${layout.sectionInfo} ${styles.flexCenter}`}>
        <div className={`bg-discount-gradient flex justify-center items-center py-2 px-3 uppercase rounded-[5px]`}>
          <img src={Discount} alt="discount" className={`h-[30px] w-[30px] object-contain`}/>
          <p className={`${styles.paragraph}`}>
            <span className={`text-white`}>20%</span> {' '}
            discount for {' '}
            <span className={`text-white`}>1 month</span> {' '}
            account
          </p>
        </div>
        <div>
          <div className={`flex flex-row`}>
            <h1 className={`text-white md:text-[78px] sm:text-[90px]  text-[58px] 
            font-semibold md:leading-[100px] sm:leading-[120px] leading-[80px] mt-[30px]`}>
              The Next {' '} <br className={`sm:flex hidden`} />
              <span className={`text-gradient`}>
                Generation {''} <br className={`sm:flex hidden`} />
            </span>
            </h1>
            <div className={`sm:flex hidden`}>
              <GetStarted />
            </div>
          </div>
          <h1 className={`text-white md:text-[78px] sm:text-[90px]  text-[58px] 
            font-semibold md:leading-[100px] sm:leading-[120px] leading-[80px]`}>Payment Method</h1>
          <p className={`${styles.paragraph} font-poppins sm:text-[24px] text-[20px] sm:leading-[42px] leading-[40px] sm:mt-6 mt-0`}>
            Our team of experts uses a methodology to identify <br className={`sm:flex hidden`}/>
            credit cards suitable for your needs.<br className={`sm:flex hidden`}/>
            We examine annual percentage rates, annual fees.
          </p>

        </div>

      </div>
      <div className={`${layout.sectionImg} relative`}>
        <img src={robot} alt="robot" className={`relative z-[5]`} />
        <div className={`absolute top-0 right-5 w-[70%] h-[65%] pink__gradient rounded-full z-[0]`} />
        <div className={`absolute bottom-15 right-10 w-[60%] h-[60%] blue__gradient rounded-full z-[1]`} />
        <div className={`absolute bottom-10 w-[50%] h-[40%] white__gradient rounded-full z-[2]`} />
      </div>
      <div className={`sm:hidden flex ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </div>
  )
}

export default Hero