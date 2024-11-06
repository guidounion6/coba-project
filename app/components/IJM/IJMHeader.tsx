import { Menu } from 'lucide-react'
import React, { useState } from 'react'

const IJMHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    return (
        <header className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <div className="text-2xl font-bold">IJM</div>
                <nav className="lg:block">
                    <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Menu className="h-6 w-6" />
                    </button>
                    <ul className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:space-x-4 absolute lg:relative top-16 lg:top-0 left-0 right-0 bg-gray-900 lg:bg-transparent p-4 lg:p-0`}>
                        <li><a href="/" className="block py-2 lg:py-0 hover:text-yellow-400">Inicio</a></li>
                        <li><a href="#servicios" className="block py-2 lg:py-0 hover:text-yellow-400">Servicios</a></li>
                        <li><a href="#productos" className="block py-2 lg:py-0 hover:text-yellow-400">Productos</a></li>
                        <li><a href="#contacto" className="block py-2 lg:py-0 hover:text-yellow-400">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default IJMHeader