import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface HomeCardProps {
  titulo: string,
  subtitulo: string,
  parrafo: string,
  imagen: StaticImageData,
  id: string
}

const HomeCard = ({ titulo, subtitulo, parrafo, imagen, id }: HomeCardProps) => {
  return (
    <section className='w-full h-[100vh]' id={id}>
      <div className='flex flex-col w-full h-full relative object-cover'>
        <div className='z-10 text-gray-200 p-5 w-full h-[500px] flex items-center font-light'>
          <div className='flex flex-col items-center justify-center p-5 h-full w-full'>
            <h1 className='text-8xl p-5 font-semibold text-white drop-shadow-[0_0_5px_rgba(99,102,241,1)]'>
              {titulo}
            </h1>
          </div>
        </div>
        <div className='z-10 text-gray-200 p-5 w-full h-full flex justify-center items-start font-light'>
          <div className='flex flex-col items-center justify-center'>
            <h3 className='text-4xl p-5 font-semibold text-white text-center drop-shadow-[0_0_5px_rgba(99,102,241,1)]'>
              {subtitulo}
            </h3>
            <p className='text-3xl font-semibold text-white text-center drop-shadow-[0_0_5px_rgba(99,102,241,1)]'>
              {parrafo}
            </p>
          </div>
        </div>
        <div className='absolute z-0 w-full h-full'>
          <Image
            src={imagen}
            alt="coba-logo"
            fill
            className='-z-1 w-full opacity-80'
          />
        </div>
      </div>
    </section>
  )
}

export default HomeCard
