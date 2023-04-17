import React from 'react';
import WomenImg from '../img/hero.png'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <section className='bg-red-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex justify-around h-full'>
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-emerald-500 mr-3'></div>
              Ethic Fabric
            </div>
            <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
                Sustainable <br/>
              <span className='font-semibold'>STYLE</span>
            </h1>
            <Link
              to={'/'}
              className='self-start uppercase font-semibold border-b-2 border-emerald-100'
              >
                Discover More
            </Link>
          </div>
          <div className='hidden md:block'>
            <img src={WomenImg} alt=''/>
          </div>
        </div>
      </section>
  )
};

export default Hero;