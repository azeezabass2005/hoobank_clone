import React from 'react'
import { stats } from '../constants'
import styles from '../styles'

const Stats = () => {
  return (
    <div className={`sm:${styles.flexCenter} justify-start flex-wrap md:min-h-[280px]`}>
      {stats.map((stat, index) => (
        <div key={stat.id} className={`flex sm:justify-between items-center`}>
          <div className={`text-white font-semibold sm:text-[48px] text-[40px] sm:mr-5`}>
            {stat.value}
          </div>
          <div className={`text-gradient uppercase flex items-center sm:text-[28px]`}>
            {stat.title}
            <span className={`${styles.paragraph} ${index === stats.length - 1 ? 'hidden' : 'flex'} ml-8 mr-8 sm:flex hidden`}>|</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Stats