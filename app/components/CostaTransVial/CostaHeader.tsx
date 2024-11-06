import { Building2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CostaHeader = () => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200">
        <Link className="flex items-center justify-center" href="#">
          <Building2 className="h-6 w-6 text-white" />
          <span className="ml-2 text-lg font-bold text-white">Costa Trans Vial</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-[#4682B4] transition-colors" href="#inicio">
            Inicio
          </Link>
          <Link className="text-sm font-medium hover:text-[#4682B4] transition-colors" href="#acerca">
            Acerca de
          </Link>
          <Link className="text-sm font-medium hover:text-[#4682B4] transition-colors" href="#proyectos">
            Proyectos
          </Link>
          <Link className="text-sm font-medium hover:text-[#4682B4] transition-colors" href="#contacto">
            Contacto
          </Link>
        </nav>
      </header>
  )
}

export default CostaHeader