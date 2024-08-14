import React from 'react'
import Image from 'next/image'
import wok from "../../../public/assets/icons/work in progress.gif"

const CostaPage = () => {
  return (
    <section className='h-full w-full flex items-center justify-center'>
      <div className='w-full h-full flex items-center justify-center'>
        <Image
          src={wok}
          alt="imagen de Work in progress"
          width={500}
          height={500}
        />
      </div>
    </section>
  )
}

export default CostaPage