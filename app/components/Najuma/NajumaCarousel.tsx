'use client'

import * as React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'

export default function NajumaCarousel() {
  const [api, setApi] = React.useState<any>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const items = [
    {
      title: 'Slide 1',
      description: 'This is the first slide of the carousel.',
    },
    {
      title: 'Slide 2',
      description: 'Here\'s the second slide with different content.',
    },
    {
      title: 'Slide 3',
      description: 'And this is the third and final slide.',
    },
  ]

  return (
    <div className="w-full max-w-xs mx-auto">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-center text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
      <div className="flex justify-center gap-2 py-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => api?.scrollPrev()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => api?.scrollNext()}
        >
          Next
        </Button>
      </div>
    </div>
  )
}