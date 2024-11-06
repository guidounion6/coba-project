import Link from 'next/link'
import React from 'react'

const MecsolFooter = () => {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">© 2024 Mecsol. Todos los derechos reservados.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            </nav>
        </footer>
    )
}

export default MecsolFooter