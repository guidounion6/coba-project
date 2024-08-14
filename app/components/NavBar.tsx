import React from 'react'
import NavLink from '../UI/NavLink'
import Image from 'next/image'

import CorpLogo from "../../public/assets/img/Logos/Corp-Logo.png"

const NavBar = () => {
  return (
    <nav className="bg-transparent w-full top-0 left-0 z-10 flex absolute z-1">   
      <div className="max-w-7xl min-h-[35vh] mx-auto flex justify-center items-center align-center">
        <div className='w-full h-full flex flex-1 justify-between items-center'>
          <div className='flex px-2'>
            <NavLink text="Visión" link="#seccion1"/>
            <NavLink text="Misión" link="#seccion2"/>
            <NavLink text="Valores" link="#seccion3"/>
            <NavLink text="Innovación" link="#seccion4"/>
          </div>

            <Image  
            src={CorpLogo}
            alt="coba-logo"
            height={200}
            width={200}
            className='mx-2 bg-white px-2'
            />
          
          <div>
            <NavLink text="Contacto" link="#contacto"/>
            <NavLink text="Empresas" link="#empresas" />
          </div>

        </div>
      </div>
    </nav>
  )
}

export default NavBar