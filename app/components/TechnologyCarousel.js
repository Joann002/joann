'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import technologiesData from '../data/technologies.json';

const TechnologyCarousel = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    setTechnologies(technologiesData.technologies);
  }, []);

  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-4 bg-gradient-card rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 hover-glow">
                <div className="relative w-16 h-16 mb-2">
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    fill
                sizes="64px"
                    className="object-contain"
                  />
                </div>
            <span className="text-sm font-medium text-foreground text-center" style={{ fontSize: "14px", textTransform: "uppercase" }}>
              {tech.name}
            </span>
              </div>
          ))}
      </div>
    </div>
  );
};

export default TechnologyCarousel; 