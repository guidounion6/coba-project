import React from 'react'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import Contact from '../components/Contact'
import NavBar from '../components/NavBar'
import Fondo1 from "../../public/assets/img/Fondos/Teramal.jpeg"
import Fondo2 from "../../public/assets/img/Fondos/costa mosaico.jpg"
import Fondo3 from "../../public/assets/img/Fondos/deposito.jpg"
import Fondo4 from "../../public/assets/img/Fondos/Herramientas.jpg"
import Empresas from '../components/Empresas'
import Footer from '../components/Footer'


const HomePage = () => {
  return (
    <nav className="flex flex-col w-full text-center">
      <div>
        <div className='relative h-screen w-full'>
          <NavBar />
          <Hero />
        </div>
        <section className="w-full h-[150px] bg-black flex items-center justify-center">
          <h2 className='text-xl text-white'>Aportamos valor al mercado de la construcción</h2>
        </section>
        <HomeCard
          titulo="Visión"
          subtitulo="Aspiramos a ser un grupo líder en nuestra industria, reconocido por nuestra capacidad de adaptarnos a los desafíos del mercado y por ofrecer servicios que superan las expectativas de nuestros cliente."
          parrafo="Nos comprometemos a expandir nuestra presencia y diversificar nuestras operaciones, mientras mantenemos un fuerte compromiso con la sostenibilidad y el bienestar de nuestras comunidades."
          imagen={Fondo1}
          id="seccion1"
        />
        <section className="w-full h-[150px] bg-black flex items-center justify-center"></section>
        <HomeCard
          titulo="Misión"
          subtitulo="proporcionamos soluciones integrales y de alta calidad en los sectores de minería, construcción y logística."
          parrafo=" Contribuimos al desarrollo sostenible de nuestras comunidades. Nos esforzamos por ser un aliado confiable para nuestros clientes, ofreciendo servicios de alquiler de maquinaria, construcción, almacenamiento refrigerado y repuestos especializados con un enfoque en la eficiencia y la innovación."
          imagen={Fondo2}
          id="seccion2"
        />
        <section className="w-full h-[150px] bg-black flex items-center justify-center"></section>
        <HomeCard
          titulo="Valores"
          subtitulo="Trabajamos desde la la integridad, la excelencia, la innovación y el respeto."
          parrafo="Creemos en operar con ética y transparencia en todas nuestras acciones. Nos dedicamos a la mejora continua de nuestros servicios, buscando siempre soluciones innovadoras para satisfacer las necesidades de nuestros clientes. Además, valoramos profundamente el respeto por nuestros empleados, clientes y el entorno en el que operamos, promoviendo prácticas sostenibles y responsables en todas nuestras empresas."
          imagen={Fondo3}
          id="seccion3"
        />
        <section className="w-full h-[150px] bg-black flex items-center justify-center"></section>
        <HomeCard
          titulo="Innovación"
          subtitulo="Creemos que la innovación y el uso de tecnología de punta son claves para ofrecer soluciones efectivas y mantenerse a la vanguardia en la industria."
          parrafo="Invertimos en equipos modernos y en la formación continua de nuestro personal para garantizar que nuestras operaciones se realicen con los más altos estándares. Además, exploramos constantemente nuevas tecnologías y metodologías para optimizar nuestros procesos, aumentar la eficiencia y proporcionar a nuestros clientes resultados excepcionales."
          imagen={Fondo4}
          id="seccion4"
        />
        <section className="w-full h-[150px] bg-black flex items-center justify-center"></section>
        <Empresas />
        <section className="w-full h-[150px] bg-black flex items-center justify-center">
          <h2 className='text-3xl text-white'>Contactanos</h2>
        </section>
        <Contact />
      </div>
      <Footer />
    </nav>
  )
}

export default HomePage