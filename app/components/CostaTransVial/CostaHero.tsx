
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const carouselImages = [
    { src: "/assets/img/Fondos/Costa cocina.jpeg", alt: "Cocina diseñadas por Costa Trans Vial" },
    { src: "/assets/img/Fondos/Costa Entrada.jpeg", alt: "Entrada de edificio diseñadas por Costa Trans Vial" },
    { src: "/assets/img/Fondos/Costa Living.jpeg", alt: "Proyecto residencial de Costa Trans Vial" },
    { src: "/assets/img/Fondos/Edificio Costa.jpg", alt: "Proyecto residencial de Costa Trans Vial" },
]


const CostaHero = () => {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % carouselImages.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % carouselImages.length)
    }

    const prevImage = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + carouselImages.length) % carouselImages.length)
    }
    return (
        <section id="inicio" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src={carouselImages[currentImage].src}
                    alt={carouselImages[currentImage].alt}
                    layout='fill'
                    objectFit="cover"
                    priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-60" />
            </div>
            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                            Construyendo el Futuro
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                            Líderes en desarrollo inmobiliario y construcción de edificios innovadores.
                        </p>
                    </div>
                    <div className="space-x-4">
                        <a href="#proyectos">
                            <Button className="bg-[#4682B4] text-white border-white hover:bg-white hover:text-[#4682B4]">
                                Nuestros Proyectos
                            </Button>
                        </a>
                        <a href="#contacto">
                            <Button className="bg-[#4682B4] text-white border-white hover:bg-white hover:text-[#4682B4]">
                                Contáctanos
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
            <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 text-white hover:bg-[#4682B4] hover:text-white"
                onClick={prevImage}
                aria-label="Imagen anterior"
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 text-white hover:bg-[#4682B4] hover:text-white"
                onClick={nextImage}
                aria-label="Siguiente imagen"
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
        </section>
    )
}

export default CostaHero