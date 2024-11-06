import React from 'react'

import paquete1 from '../../../public/assets/img/Fondos/Paquete 1.jpeg'
import paquete2 from '../../../public/assets/img/Fondos/Paquete 2.jpeg'
import paquete3 from '../../../public/assets/img/Fondos/Paquete 3.jpeg'
import Image from 'next/image'

const IJMProductos = () => {
    return (
        <>
            <section id="productos" className="py-16 bg-gray-800 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Productos Principales</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <Image src={paquete2} 
                            alt="Motores" 
                            className="mx-auto mb-4 rounded-full" 
                            width={200} height={200} 
                            />
                            <h3 className="text-xl font-semibold mb-2">Motores</h3>
                            <p className="text-gray-300">Repuestos para motores de alta potencia</p>
                        </div>
                        <div className="text-center">
                            <Image src={paquete3} alt="Transmisiones" className="mx-auto mb-4 rounded-full"  width={200} height={200} />
                            <h3 className="text-xl font-semibold mb-2">Transmisiones</h3>
                            <p className="text-gray-300">Sistemas de transmisión para todo tipo de vehículos</p>
                        </div>
                        <div className="text-center">
                            <Image src={paquete2} alt="Sistemas Hidráulicos" className="mx-auto mb-4 rounded-full" width={200} height={200}  />
                            <h3 className="text-xl font-semibold mb-2">Sistemas Hidráulicos</h3>
                            <p className="text-gray-300">Componentes para sistemas hidráulicos de maquinaria pesada</p>
                        </div>
                        <div className="text-center">
                            <Image src={paquete3} alt="Neumáticos" className="mx-auto mb-4 rounded-full"  width={200} height={200} />
                            <h3 className="text-xl font-semibold mb-2">Neumáticos</h3>
                            <p className="text-gray-300">Neumáticos de alta resistencia para camiones y maquinaria</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-yellow-400">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Por Qué Elegirnos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Calidad Garantizada</h3>
                            <p className="text-gray-800">Trabajamos solo con las mejores marcas y productos del mercado.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Experiencia</h3>
                            <p className="text-gray-800">Años de experiencia en el sector nos respaldan.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Servicio al Cliente</h3>
                            <p className="text-gray-800">Atención personalizada y soporte técnico especializado.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IJMProductos