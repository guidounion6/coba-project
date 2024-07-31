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
        <div className='z-10 text-white p-5 w-full h-full flex items-center font-light'>
          <div className='flex flex-col items-center p-5'>
            <h1 className='text-8xl p-5 text-shadow '>{titulo}</h1>

            <h3 className='text-3xl p-5 text-shadow'>{subtitulo}</h3>
            <p className='text-2xl drop-shadow-lg'>{parrafo}</p>
          </div>
        </div>
        <div className='absolute z-0 w-full h-full'>
          <Image
            src={imagen}
            alt="coba-logo"
            fill
            className='-z-1 w-full'
          />
        </div>
      </div>
    </section>
  )
}

export default HomeCard