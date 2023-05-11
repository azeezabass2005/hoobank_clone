import React from 'react'
import { airbnb, binance, coinbase,dropbox } from '../assets'
import styles from '../styles'
import Button from './Button'

const Clients = () => {
  return (
    <div>
      <div className={`${styles.flexCenter} flex-wrap gap-[25px] ${styles.padding} justify-around sm:mt-20 mt-10`} id='clients' >
        <img src={airbnb} alt="airbnb" className={`cursor-pointer h-[70px] w-[250px] object-contain`} />
        <img src={binance} alt="binance" className={`cursor-pointer h-[70px] w-[250px] object-contain`} />
        <img src={coinbase} alt="coinbase" className={`cursor-pointer h-[70px] w-[250px] object-contain`} />
        <img src={dropbox} alt="dropbox" className={`cursor-pointer h-[70px] w-[250px] object-contain`} />
      </div>
      <div className={`${styles.flexCenter} md:flex-row flex-col feedback-card ${styles.padding} rounded-[20px] justify-around mb-10`}>
        <div>
          <h2 className={`${styles.heading2} cursor-pointer`} >
            Let&apos;s try our service now!
          </h2>
          <p className={`${styles.paragraph} max-w-[445px]`}>
            Everything you need to accept card payment and grow your business on the planet.
          </p>
        </div>
        <Button style={`md:mt-0 mt-10`} />
      </div>
    </div>
  )
}

export default Clients