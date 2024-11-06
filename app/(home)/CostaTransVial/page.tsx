'use client'

import CostaHeader from "@/app/components/CostaTransVial/CostaHeader"
import CostaHero from "@/app/components/CostaTransVial/CostaHero"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, ChevronLeft, ChevronRight, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export default function Component() {
 
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <CostaHeader />
      <main className="flex-1">
        <CostaHero />
        <section id="acerca" className="w-full py-12 md:py-24 lg:py-32 bg-[#F0F8FF]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#4682B4]">Acerca de Nosotros</h2>
            <p className="mt-4 max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Costa Trans Vial es una empresa líder en desarrollo inmobiliario, especializada en la construcción de
              edificios innovadores y sostenibles. Con años de experiencia en el mercado, nos enorgullecemos de crear
              espacios que mejoran la calidad de vida de las personas y contribuyen al desarrollo urbano.
            </p>
          </div>
        </section>
        <section id="proyectos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-[#4682B4]">Nuestros Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-[#4682B4]">Edificio Horizonte</CardTitle>
                  <CardDescription>Complejo residencial de lujo</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Edificio Horizonte"
                    className="w-full h-48 object-cover rounded-md"
                    width={400}
                    height={300}
                  />
                  <p className="mt-2 text-gray-700">Un moderno edificio de apartamentos con vistas panorámicas al océano.</p>
                </CardContent>
              </Card>
              <Card className="bg-white border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-[#4682B4]">Torre Empresarial Vanguardia</CardTitle>
                  <CardDescription>Oficinas de clase mundial</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Torre Empresarial Vanguardia"
                    className="w-full h-48 object-cover rounded-md"
                    width={400}
                    height={300}
                  />
                  <p className="mt-2 text-gray-700">Espacios de trabajo innovadores en el corazón del distrito financiero.</p>
                </CardContent>
              </Card>
              <Card className="bg-white border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-[#4682B4]">Complejo Residencial Verde</CardTitle>
                  <CardDescription>Viviendo en armonía con la naturaleza</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Complejo Residencial Verde"
                    className="w-full h-48 object-cover rounded-md"
                    width={400}
                    height={300}
                  />
                  <p className="mt-2 text-gray-700">Desarrollo sostenible con amplias áreas verdes y tecnología eco-amigable.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
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
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200">
        <p className="text-xs text-gray-500">© 2024 Costa Trans Vial. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-gray-500 hover:text-[#4682B4]" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs text-gray-500 hover:text-[#4682B4]" href="#">
            Política de Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}