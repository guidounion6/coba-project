"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { navLinks } from '../const/navlinks'
import FondoEmpresas from "../../public/assets/img/Fondos/TransporteCoba.jpg"

const Empresas = () => {
  const pathname = usePathname()

  return (
    <section  id="empresas" className='w-full h-[100vh]'>
      <div className='flex flex-col w-full h-full relative object-cover'>
        <div className='z-10 text-black p-5 w-full h-full flex items-center justify-center font-bold '>
          <h2 className='text-8xl p-5 text-shadow text-black'>Nuestras Empresas</h2>
        </div>
        <div className='flex flex-1 h-full w-full items-start justify-evenly'>
          {navLinks.map((item) => {
            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
            return (
              <Link
                href={item.route}
                key={item.label}
                className={cn("flex gap-4 items-center p-4 rounded-lg justify-start z-10 bg-white mb-2", {
                  "bg-red-500": isActive}
                )}
              >
                <Image 
                  src={item.imgUrl}
                  alt={item.label}
                  width="150"
                  height="150"
                  className='bg-cover'
                />
              </Link>
            )
          })}
        </div>
        <div className='absolute z-0 w-full h-full bg-cover'>
          <Image
            src={FondoEmpresas}
            alt="fondo"
            layout="fill"
            className='-z-1 w-full'
          />
        </div>
      </div>
    </section>
  )
}

export default Empresas
