import React from 'react'
import styles from '../styles'

const Button = ({ style }) => {
  return (
    <div className={`bg-blue-gradient py-6 px-7 font-poppins text-[30px] rounded-[5px] ${style} cursor-pointer`}>
      Get Started
    </div>
  )
}

export default Button