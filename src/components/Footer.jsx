import React from 'react'
import styles from '../styles'
import { logo } from '../assets'
import { footerLinks } from '../constants'
import { socialMedia } from '../constants'

const Footer = () => {
  return (
    <div className={`bg-black ${styles.padding}`}>
      <div className={`flex justify-around items-start flex-wrap md:mb-10 mb-5`}>
        <div>
          <img src={logo} alt="logo" />
          <p className={`${styles.paragraph} sm:mt-10 mt-3`}>
            A new way to make the payments <br className={`sm:flex hidden`} /> easy, reliable and secure.
          </p>
        </div>
        {footerLinks.map((footerLink, index) => (
          <div key={footerLink.title}>
            <h4 className={`text-white text-[20px] font-poppins`}>{footerLink.title}</h4>
            <ul>
              {footerLink.links.map((linked) => (
                <li key={linked.name}>
                  <a href={linked.link} className={`text-dimWhite`}>{linked.name}</a>          
                </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
      <hr />
      <div className={`flex justify-around sm:mt-6 mt-3`}>
        <div className={`text-dimWhite font-serif`}>
          Copyright &copy; <span className={`font-poppins`}>
            2021 HooBank All Rights Reserved
          </span>
        </div>
        <div className={`sm:flex hidden`}>
          <ul className='flex'>
            {socialMedia.map((social) => (
              <li key={social.id}>
                <a href={social.link}>
                  <img src={social.icon} alt="icon" className='ml-4' />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer