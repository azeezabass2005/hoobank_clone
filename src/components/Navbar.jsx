import React from 'react';
import { logo, menu, close } from '../assets';
import { navLinks } from '../constants';
import { useState } from 'react';
import { socialMedia } from '../constants';

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`flex justify-between w-full py-6 navbar items-center`}>
      <div>
        <img src={logo} alt="logo"  className={`w-[124px] h-[40px]`}/>
      </div>

        <ul className={`sm:flex hidden flex-1 justify-end align-center list-none`}>
        {navLinks.map((nav, index) => (
          <li
           key={nav.id}
           className={`cursor-pointer font-poppins text-[16px] font-normal text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-6'}`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
        </ul>
        <div className={`sm:hidden flex`}>
          <img
           src={toggle ? close : menu} alt="logo"
           onClick={() => setToggle((prev) => (!prev))}
           className={`h-[28px] w-[28px] object-contain`}
          />

          <div className={`${toggle ? 'flex' : 'hidden'} flex-col absolute right-20 bg-black-gradient sidebar py-7 px-7 rounded-[10px]`}>
          <ul className={` flex-1 justify-end align-center list-none`}>
            {navLinks.map((nav, index) => (
              <li
              key={nav.id}
              className={`cursor-pointer font-poppins text-[16px] font-normal text-white ${index === navLinks.length - 1 ? 'mb-0' : 'mb-6'}`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
            <div>
              <ul className='flex'>
                {socialMedia.map((social) => (
                  <li key={social.id}>
                    <a href={social.link}>
                      <img src={social.icon} alt="icon" className={`p-3`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar