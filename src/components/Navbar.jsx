import React from 'react';
import { useUnmountEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
// import { NavLinks } from '../constants/index';
import { logo, menu, close } from '../assets';

const Navbar = () => {

  const [actice, setActive] = useState("");
  const navLinks = [
    {
      id: "about",
      title: "AboutTitle",
    },
    {
      id: "work",
      title: "WorkTitle",
    },
    {
      id: "contact",
      title: "ContactTitle",
    },
  ];
  const [toggle, setToggle] = useState(false);


  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/"
          className=' flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }
          } >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'> Axel <span className='sm:block hidden'>|Javascript CSS HTML SQL</span></p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id} className='hover:text-white text-[18px] font-medium cursor-pointer text-secondary'
              onClick={() => { setActive(link.title) }}>  {/* className={`${active === link.title ? "text-white" : "text-secondary"}`} */}
              <a href={`#${link.id}`}>{link.id}</a>
            </li>
          ))}
        </ul>


        {/* MOBILE NAVBAR, SHOWS IF THE SCREEN IS SMALL */}
        <div className=' sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt={"menulogo"} className='w-9 h-9 object-contain cusros-pointer'
            onClick={() => setToggle(!toggle)} />
        </div>


        <div className={`${toggle ? 'flex' : 'hidden'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`} >

          <ul className='list-none flex  justify-end items-start flex-col gap-4'>
            {navLinks.map((link) => (
              <li
                key={link.id} className='hover:text-white text-[18px] font-medium cursor-pointer text-secondary font-poppins font-medium font-secondary'
                onClick={() => { setActive(link.title) }}>  {/* className={`${active === link.title ? "text-white" : "text-secondary"}`} */}
                <a href={`#${link.id}`}>{link.id}</a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar