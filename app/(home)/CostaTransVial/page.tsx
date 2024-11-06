'use client'

import CostaAbout from "@/app/components/CostaTransVial/Costabout"
import CostaFooter from "@/app/components/CostaTransVial/CostaFooter"
import CostaHeader from "@/app/components/CostaTransVial/CostaHeader"
import CostaHero from "@/app/components/CostaTransVial/CostaHero"
import CostaProyectos from "@/app/components/CostaTransVial/CostaProyectos"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, ChevronLeft, ChevronRight, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const  CostaPage =  () => {

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <CostaHeader />
      <main className="flex-1">
        <CostaHero />
        <CostaAbout />
        <CostaProyectos />
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-[#F0F8FF]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-[#4682B4]">Contáctanos</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-[#4682B4]" />
                  <span className="text-gray-700">Av. Principal 123, Ciudad Costera</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-[#4682B4]" />
                  <span className="text-gray-700">+1 234 567 890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-[#4682B4]" />
                  <span className="text-gray-700">info@costatransvial.com</span>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">
                  ¿Interesado en nuestros proyectos o servicios? No dudes en contactarnos. Estamos aquí para responder
                  todas tus preguntas y ayudarte a encontrar la solución perfecta para tus necesidades inmobiliarias.
                </p>
                <Button className="w-full sm:w-auto bg-[#4682B4] text-white hover:bg-[#5A95C2]">Enviar Mensaje</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CostaFooter />
    </div>
  )
}

export default CostaPage