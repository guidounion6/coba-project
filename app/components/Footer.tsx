import Image from 'next/image'
import React from 'react'
import corplogo from "../../public/assets/img/Logos/Corp-Logo.png"

const Footer = () => {
  return (
    <section className='w-full h-[200px] bg-slate-600 flex items-center justify-between px-10 md:px-20'>
      <div className='flex items-center justify-center md:justify-start w-full md:w-auto'>
        <Image 
        src={corplogo} 
        alt='Coba Corporation Logo' 
        className='h-12 w-12 md:h-20 md:w-20 object-contain'
        />
        <p className='text-white text-lg md:text-xl ml-2 md:ml-4'>
          Coba Corporation<span className='align-top text-xs md:text-sm'>™</span>
        </p>
      </div>
    </section>
  )
}

export default Footer