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
          titulo="¿Qué es el Covid-19?"
          subtitulo="El COVID-19 es una enfermedad respiratoria causada por un nuevo coronavirus."
          parrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum atque provident magnam, iusto suscipit eius sint fuga corrupti impedit velit tempora, dicta delectus pariatur quo unde dignissimos enim excepturi quam."
          imagen={Fondo1}
        />
        <HomeCard
          titulo="¿Qué es el Covid-19?"
          subtitulo="El COVID-19 es una enfermedad respiratoria causada por un nuevo coronavirus."
          parrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum atque provident magnam, iusto suscipit eius sint fuga corrupti impedit velit tempora, dicta delectus pariatur quo unde dignissimos enim excepturi quam."
          imagen={Fondo2} />
        <HomeCard
          titulo="¿Qué es el Covid-19?"
          subtitulo="El COVID-19 es una enfermedad respiratoria causada por un nuevo coronavirus."
          parrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum atque provident magnam, iusto suscipit eius sint fuga corrupti impedit velit tempora, dicta delectus pariatur quo unde dignissimos enim excepturi quam."
          imagen={Fondo3} />
        <HomeCard
          titulo="¿Qué es el Covid-19?"
          subtitulo="El COVID-19 es una enfermedad respiratoria causada por un nuevo coronavirus."
          parrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum atque provident magnam, iusto suscipit eius sint fuga corrupti impedit velit tempora, dicta delectus pariatur quo unde dignissimos enim excepturi quam."
          imagen={Fondo4} />
        <Empresas />
        <Contact />
      </div>
    </nav>
  )
}

export default HomePage