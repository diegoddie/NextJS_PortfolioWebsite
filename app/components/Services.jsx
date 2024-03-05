'use client'

import React from 'react'
import ServicesCard from './ServicesCard'
import { SERVICES_DATA } from "../utils/servicesData";

const Services = () => {
  return (
    <section id='services' className='py-10 md:py-20 md:px-6'>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-8">
            Services
        </h2>
        <div className='flex flex-col lg:flex-row gap-8 mt-6 justify-center'>
            {SERVICES_DATA.map((service) => (
                <ServicesCard 
                    key={service.id}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                />
            ))}
        </div>
    </section>
  )
}

export default Services