'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import technologiesData from '../data/technologies.json';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TechnologyCarousel = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    setTechnologies(technologiesData.technologies);
  }, []);

  return (
    <div className="w-full py-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
          containScroll: "trimSnaps",
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
        }}
        className="w-full"
      >
        <CarouselContent>
          {technologies.map((tech, index) => (
            <CarouselItem key={index} className="basis-1/3 md:basis-1/5">
              <div className="flex mt-8 items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-16 h-16 mb-2">
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200" style={{ fontSize: "18px", textTransform: "uppercase" }}>{tech.name}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default TechnologyCarousel; 