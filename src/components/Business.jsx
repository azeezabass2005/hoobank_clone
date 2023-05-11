import React from 'react'
import styles from '../styles'
import { layout } from '../styles'
import Button from './Button'
import { features } from '../constants'

const FeatureCard = ({ icon, title, content, index }) => (
  <div>
    <img src={icon} alt="icon" />
    <div>
      <h4>{content}</h4>
      <p>{title}</p>
    </div>
  </div>
)

const Business = () => {
  return (
    <div id='features' className={`${layout.section} sm:${styles.paddingX} md:${styles.flexCenter} min-h-[100%] items-start`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2} sm:mt-10 mt-0`}>
          You do the business, <br className={`sm:flex hidden`} />
          we&apos;ll handle the money
        </h2>
        <p className={`${styles.paragraph} sm:mt-10 mt-0 sm:leading-[40px]`}>
          With the right credit card, you can improve your financial life <br className={`sm:flex hidden`} />
          by building credits, earning rewards and saving money but <br className={`sm:flex hidden`} />
          with hundreds of credit cards on the market.
        </p>
        <Button style={`mt-10`}/>
      </div>
      <div className={`${layout.sectionImg} ${styles.flexCenter}`}>
        <ul>
          {features.map((feature, index) => (
            <li key={feature.id} className={`flex ${features.length - 1 === index ? 'mb-0': 'mb-7'} feedback-card px-5 py-3 rounded-[15px] ${styles.flexCenter} cursor-pointer`}>
              <div className={`h-[50px] w-[50px] rounded-full bg-dimBlue ${styles.flexCenter} sm:mr-9 mr-3 p-2`}>
                <img src={feature.icon} alt="icon" className={`h-[28px] w-[28px] object-contain`} />
              </div>
              <div>
                <h4 className={`text-white uppercase font-poppins`}>{feature.title}</h4>
                <p className={`${styles.paragraph} max-w-[420px]`}>{feature.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Business