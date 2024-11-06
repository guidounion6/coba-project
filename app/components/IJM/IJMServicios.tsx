import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Globe, Truck, Wrench } from 'lucide-react'
import React from 'react'

const IJMServicios = () => {
    return (
        <section id="servicios" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nuestros Servicios</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="bg-gray-50 border-none shadow-lg">
                        <CardHeader>
                            <Truck className="w-12 h-12 text-yellow-400 mx-auto" />
                            <CardTitle className="text-center text-gray-800">Importación</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-center text-gray-600">Importamos repuestos de las mejores marcas a nivel mundial.</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-gray-50 border-none shadow-lg">
                        <CardHeader>
                            <Wrench className="w-12 h-12 text-yellow-400 mx-auto" />
                            <CardTitle className="text-center text-gray-800">Asesoría Técnica</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-center text-gray-600">Ofrecemos asesoría especializada para la selección de repuestos.</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-gray-50 border-none shadow-lg">
                        <CardHeader>
                            <Globe className="w-12 h-12 text-yellow-400 mx-auto" />
                            <CardTitle className="text-center text-gray-800">Exportación</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-center text-gray-600">Exportamos productos de calidad a diversos países.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default IJMServicios