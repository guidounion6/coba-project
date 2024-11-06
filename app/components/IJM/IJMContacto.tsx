import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const IJMContacto = () => {
  return (
    <section id="contacto" className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contáctanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Información de Contacto</h3>
                <ul className="space-y-4">
                    <li className="flex items-center">
                        <Phone className="w-6 h-6 text-yellow-400 mr-2" />
                        <span>+1 234 567 890</span>
                    </li>
                    <li className="flex items-center">
                        <Mail className="w-6 h-6 text-yellow-400 mr-2" />
                        <span>info@importadoraexportadora.com</span>
                    </li>
                    <li className="flex items-center">
                        <MapPin className="w-6 h-6 text-yellow-400 mr-2" />
                        <span>123 Calle Principal, Ciudad, País</span>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Envíanos un Mensaje</h3>
                <form className="space-y-4">
                    <Input type="text" placeholder="Nombre" />
                    <Input type="email" placeholder="Correo Electrónico" />
                    <Textarea placeholder="Mensaje" />
                    <Button className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500">Enviar Mensaje</Button>
                </form>
            </div>
        </div>
    </div>
</section>
  )
}

export default IJMContacto