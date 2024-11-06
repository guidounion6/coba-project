// 'use client'

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Truck, Wrench, Globe, Phone, Mail, MapPin, Menu } from "lucide-react"
// import { useState } from "react"

// export default function LandingPage() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="bg-gray-900 text-white">
//         <div className="container mx-auto px-4 py-6 flex justify-between items-center">
//           <div className="text-2xl font-bold">Logo</div>
//           <nav className="lg:block">
//             <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               <Menu className="h-6 w-6" />
//             </button>
//             <ul className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:space-x-4 absolute lg:relative top-16 lg:top-0 left-0 right-0 bg-gray-900 lg:bg-transparent p-4 lg:p-0`}>
//               <li><a href="#inicio" className="block py-2 lg:py-0 hover:text-yellow-400">Inicio</a></li>
//               <li><a href="#servicios" className="block py-2 lg:py-0 hover:text-yellow-400">Servicios</a></li>
//               <li><a href="#productos" className="block py-2 lg:py-0 hover:text-yellow-400">Productos</a></li>
//               <li><a href="#contacto" className="block py-2 lg:py-0 hover:text-yellow-400">Contacto</a></li>
//             </ul>
//           </nav>
//         </div>
//       </header>

//       <main>
//         <section id="inicio" className="bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center text-white py-20">
//           <div className="container mx-auto px-4 text-center">
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Importación y Exportación de Calidad</h1>
//             <p className="text-xl mb-8">Repuestos para camiones y maquinaria de construcción y minería</p>
//             <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">Contáctanos</Button>
//           </div>
//         </section>

//         <section className="py-16 bg-gray-100">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Sobre Nosotros</h2>
//             <p className="text-center max-w-2xl mx-auto text-gray-600">
//               Somos líderes en la importación y exportación de repuestos de alta calidad para camiones y maquinaria de construcción y minería. Con años de experiencia en el mercado, ofrecemos soluciones confiables y eficientes para mantener su flota en funcionamiento óptimo.
//             </p>
//           </div>
//         </section>

//         <section id="servicios" className="py-16 bg-white">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nuestros Servicios</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               <Card className="bg-gray-50 border-none shadow-lg">
//                 <CardHeader>
//                   <Truck className="w-12 h-12 text-yellow-400 mx-auto" />
//                   <CardTitle className="text-center text-gray-800">Importación</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-center text-gray-600">Importamos repuestos de las mejores marcas a nivel mundial.</p>
//                 </CardContent>
//               </Card>
//               <Card className="bg-gray-50 border-none shadow-lg">
//                 <CardHeader>
//                   <Wrench className="w-12 h-12 text-yellow-400 mx-auto" />
//                   <CardTitle className="text-center text-gray-800">Asesoría Técnica</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-center text-gray-600">Ofrecemos asesoría especializada para la selección de repuestos.</p>
//                 </CardContent>
//               </Card>
//               <Card className="bg-gray-50 border-none shadow-lg">
//                 <CardHeader>
//                   <Globe className="w-12 h-12 text-yellow-400 mx-auto" />
//                   <CardTitle className="text-center text-gray-800">Exportación</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-center text-gray-600">Exportamos productos de calidad a diversos países.</p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>

//         <section id="productos" className="py-16 bg-gray-800 text-white">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-center mb-12">Productos Principales</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               <div className="text-center">
//                 <img src="/placeholder.svg?height=150&width=150" alt="Motores" className="mx-auto mb-4 rounded-full" />
//                 <h3 className="text-xl font-semibold mb-2">Motores</h3>
//                 <p className="text-gray-300">Repuestos para motores de alta potencia</p>
//               </div>
//               <div className="text-center">
//                 <img src="/placeholder.svg?height=150&width=150" alt="Transmisiones" className="mx-auto mb-4 rounded-full" />
//                 <h3 className="text-xl font-semibold mb-2">Transmisiones</h3>
//                 <p className="text-gray-300">Sistemas de transmisión para todo tipo de vehículos</p>
//               </div>
//               <div className="text-center">
//                 <img src="/placeholder.svg?height=150&width=150" alt="Sistemas Hidráulicos" className="mx-auto mb-4 rounded-full" />
//                 <h3 className="text-xl font-semibold mb-2">Sistemas Hidráulicos</h3>
//                 <p className="text-gray-300">Componentes para sistemas hidráulicos de maquinaria pesada</p>
//               </div>
//               <div className="text-center">
//                 <img src="/placeholder.svg?height=150&width=150" alt="Neumáticos" className="mx-auto mb-4 rounded-full" />
//                 <h3 className="text-xl font-semibold mb-2">Neumáticos</h3>
//                 <p className="text-gray-300">Neumáticos de alta resistencia para camiones y maquinaria</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="py-16 bg-yellow-400">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Por Qué Elegirnos</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-900">Calidad Garantizada</h3>
//                 <p className="text-gray-800">Trabajamos solo con las mejores marcas y productos del mercado.</p>
//               </div>
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-900">Experiencia</h3>
//                 <p className="text-gray-800">Años de experiencia en el sector nos respaldan.</p>
//               </div>
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-900">Servicio al Cliente</h3>
//                 <p className="text-gray-800">Atención personalizada y soporte técnico especializado.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="contacto" className="py-16 bg-gray-100">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contáctanos</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div>
//                 <h3 className="text-xl font-semibold mb-4 text-gray-800">Información de Contacto</h3>
//                 <ul className="space-y-4">
//                   <li className="flex items-center">
//                     <Phone className="w-6 h-6 text-yellow-400 mr-2" />
//                     <span>+1 234 567 890</span>
//                   </li>
//                   <li className="flex items-center">
//                     <Mail className="w-6 h-6 text-yellow-400 mr-2" />
//                     <span>info@importadoraexportadora.com</span>
//                   </li>
//                   <li className="flex items-center">
//                     <MapPin className="w-6 h-6 text-yellow-400 mr-2" />
//                     <span>123 Calle Principal, Ciudad, País</span>
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-4 text-gray-800">Envíanos un Mensaje</h3>
//                 <form className="space-y-4">
//                   <Input type="text" placeholder="Nombre" />
//                   <Input type="email" placeholder="Correo Electrónico" />
//                   <Textarea placeholder="Mensaje" />
//                   <Button className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500">Enviar Mensaje</Button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="bg-gray-900 text-white py-8">
//         <div className="container mx-auto px-4 text-center">
//           <p>&copy; 2023 Importadora y Exportadora. Todos los derechos reservados.</p>
//         </div>
//       </footer>
//     </div>
//   )
// }