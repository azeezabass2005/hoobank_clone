import React from 'react'
import styles from '../styles'
import { layout } from '../styles'
import { card } from '../assets'
import Button from './Button'

const CardDeal = () => {
  return (
    <div className={`${layout.section} ${styles.flexCenter} sm:${styles.paddingX}`} id='product' >
      <div className={`${layout.sectionInfo}`}>
        <h1 className={`${styles.heading2}`}>
          Find a better card deal <br className={`sm:flex hidden`} />
          in few easy steps.
        </h1>
        <p className={`${styles.paragraph} max-w-[455px] sm:mt-7 mr-0`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquest Auis aliquet eget mauris tortor. c Aliquet ultrices ac, ametau
        </p>
        <Button style={`mt-10`} />
      </div>
      <div className={`${layout.sectionImg} relative`}>
        <img src={card} alt="card deal" className={`relative z-[5]`} />
        <div className={`absolute pink__gradient bottom-[10%] h-[65%] left-[20%] w-[55%] z-[3] rounded-full`} />
        <div className={`absolute blue__gradient top-[25%] left-[15%] h-[30%] w-[45%] z-[0] rounded-full`} />
        <div className={`absolute white__gradient right-[13%] top-[0%] h-[45%] w-[55%] z-[1] rounded-full`} />
      </div>
    </div>
  )
}

export default CardDeal