import { Button } from '@/components/ui/button'
import React from 'react'

const IJMHero = () => {
    return (
        <>
            <section id="inicio" className="bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Importación y Exportación de Calidad</h1>
                    <p className="text-xl mb-8">Repuestos para camiones y maquinaria de construcción y minería</p>
                    <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">Contáctanos</Button>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Sobre Nosotros</h2>
                    <p className="text-center max-w-2xl mx-auto text-gray-600">
                        Somos líderes en la importación y exportación de repuestos de alta calidad para camiones y maquinaria de construcción y minería. Con años de experiencia en el mercado, ofrecemos soluciones confiables y eficientes para mantener su flota en funcionamiento óptimo.
                    </p>
                </div>
            </section>
        </>
    )
}

export default IJMHero