import React from 'react';


import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

import image1 from '../../../public/assets/img/Fondos/Excabavoras.jpg';
import image2 from '../../../public/assets/img/Fondos/Najuma1.jpg';
import image3 from '../../../public/assets/img/Fondos/Najuma2.png';
import image4 from '../../../public/assets/img/Fondos/Fondo4.jpg';
import Image from 'next/image';

const Array = [
    { image: image1, title: "Excabavoras" },
    { image: image2, title: "Najuma1" },
    { image: image3, title: "Najuma2" },
    { image: image4, title: "Fondo4" },


]

export function NajumaCarousel() {
    return (
        <div className='w-full h-full flex flex-row justify-center items-center py-2'>
            <Carousel 
             opts={{
                align: "start",
                loop: true,
              }}
            className="w-full max-w-xs">
                <CarouselContent>
                    {Array.map((item, index: number) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={500}
                                            height={500}
                                            objectFit='cover'
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default NajumaCarousel