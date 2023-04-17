import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { SidebarContext } from '../context/SidebarContext';
import { BsBag } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import  Logo  from '../img/logo-fabric.png'

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <Link to={'/'}>
          <div>
            <img className='w-[60px]' src={Logo} alt=''/> 
          </div>
        </Link>
        <div onClick={ () => setIsOpen(!isOpen)}
             className='cursor-pointer flex-relative'>
          <BsBag className='text-2xl'/>
          <div className='bg-emerald-600 absolute right-21 bottom-9
                          text-[12px] w-[18px] h-[18px] text-white
                          rounded-full flex justify-center items-center'>
              {itemAmount}
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
