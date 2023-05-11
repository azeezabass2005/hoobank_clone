import React from 'react'
import styles from '../styles'
import { feedback } from '../constants'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
  return (
    <div className={`flex sm:${styles.paddingX} flex-col`}>
      <div className={`flex md:flex-row flex-col ${styles.paddingY} w-full `}>
        <h1 className={`${styles.heading2}`}>
          What people are <br className={`sm:flex hidden`} /> saying about us.
        </h1>
        <p className={`${styles.paragraph} max-w-[440px]`}>
          Everything you need to accept card payment and grow your business anywhee on the planet
        </p>
      </div>
      <div className={`flex md:flex-row flex-col md:justify-around w-full items-center feedback-container md:gap-10 relative`}>
        {feedback.map((feed, index) => (
          <FeedbackCard {...feed} key={feed.id} />
        ))}
        <div className={`absolute z-[0] h-[80%] w-[30%] rounded-full blue__gradient right-0`} />
      </div>
    </div>
  )
}

export default Testimonials