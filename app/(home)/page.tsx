import React from 'react'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import Contact from '../components/Contact'
import NavBar from '../components/NavBar'
import Fondo1 from "../../public/assets/img/Fondos/Fondo1.jpg"
import Fondo2 from "../../public/assets/img/Fondos/Fondo2.jpg"
import Fondo3 from "../../public/assets/img/Fondos/Fondo3.jpg"
import Fondo4 from "../../public/assets/img/Fondos/Fondo4.jpg"
import Fondo5 from "../../public/assets/img/Fondos/Fondo5.jpg"
import Empresas from '../components/Empresas'


const HomePage = () => {
  return (
    <nav className="flex flex-col w-full">
      <div>
        <div className='relative h-screen w-full'>
          <NavBar />
          <Hero />
        </div>
        <HomeCard
          titulo="¿Seccion 1?"
          subtitulo="El COVID-19 es una enfermedad respiratoria causada por un nuevo coronavirus."
          parrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum atque provident magnam, iusto suscipit eius sint fuga corrupti impedit velit tempora, dicta delectus pariatur quo unde dignissimos enim excepturi quam."
          imagen={Fondo1}
          id="seccion1"
        />
        <HomeCard
          titulo="¿Seccion 2?"
          subtitulo="El COVID-19 es una enfermedad respiratoria causada por un nuevo coronavirus."
          parrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum atque provident magnam, iusto suscipit eius sint fuga corrupti impedit velit tempora, dicta delectus pariatur quo unde dignissimos enim excepturi quam."
          imagen={Fondo2} 
          id="seccion2"
          />
        <HomeCard
          titulo="¿Seccion 3?"
          subtitulo="El COVID-19 es una enfermedad respiratoria causada por un nuevo coronavirus."
          parrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum atque provident magnam, iusto suscipit eius sint fuga corrupti impedit velit tempora, dicta delectus pariatur quo unde dignissimos enim excepturi quam."
          imagen={Fondo3} 
          id="seccion3"
          />
        <HomeCard
          titulo="¿Seccion 4?"
          subtitulo="El COVID-19 es una enfermedad respiratoria causada por un nuevo coronavirus."
          parrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum atque provident magnam, iusto suscipit eius sint fuga corrupti impedit velit tempora, dicta delectus pariatur quo unde dignissimos enim excepturi quam."
          imagen={Fondo4} 
          id="seccion4"
          />
        <Empresas />
        <Contact />
      </div>
    </nav>
  )
}

export default HomePage