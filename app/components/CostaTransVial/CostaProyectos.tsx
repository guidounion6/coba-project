
import React from 'react'


import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import Entrada from '../../../public/assets/img/Fondos/Costa Entrada.jpeg'
import Edificio from '../../../public/assets/img/Fondos/Edificio Costa.jpg'
import Interior from '../../../public/assets/img/Fondos/Costa Living.jpeg'

const CostaProyectos = () => {
    return (
        <section id="proyectos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-[#4682B4]">Nuestros Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white border border-gray-200 hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out">
                <CardHeader>
                  <CardTitle className="text-[#4682B4]">Edificio Horizonte</CardTitle>
                  <CardDescription>Complejo residencial de lujo</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={Entrada}
                    alt="Edificio Horizonte"
                    className="w-full h-48 object-cover rounded-md"
                    width={400}
                    height={300}
                  />
                  <p className="mt-2 text-gray-700">Desarrollo sostenible con amplias áreas verdes y desarrollo sustentable.</p>
                </CardContent>
              </Card>
              <Card className="bg-white border border-gray-200 hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out">
                <CardHeader>
                  <CardTitle className="text-[#4682B4]">Torre Empresarial Vanguardia</CardTitle>
                  <CardDescription>Oficinas de clase mundial</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={Edificio}
                    alt="Torre Empresarial Vanguardia"
                    className="w-full h-48 object-cover rounded-md"
                    width={400}
                    height={300}
                  />
                  <p className="mt-2 text-gray-700">Espacios de trabajo innovadores en el corazón del centro urbano.</p>
                </CardContent>
              </Card>
              <Card className="bg-white border border-gray-200 hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out">
                <CardHeader>
                  <CardTitle className="text-[#4682B4]">Construcción y diseño interior</CardTitle>
                  <CardDescription>Departamentos con estilo y buen gusto.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={Interior}
                    alt="Complejo Residencial Verde"
                    className="w-full h-48 object-cover rounded-md"
                    width={400}
                    height={300}
                  />
                  <p className="mt-2 text-gray-700">Un moderno edificio de apartamentos con vistas panorámicas.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
    )
}

export default CostaProyectos