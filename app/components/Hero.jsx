"use client";

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDownTrayIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='lg:px-4 py-2 lg:py-16'>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:mx-6'>
            <div className='lg:w-2/3 place-self-center text-center lg:text-left'>
                <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl md:leading-normal justify-self-start font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-300'>Hello, I'm Diego</span>👋🏻
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            "Full Stack Developer",
                            2000,
                            "Blockchain Developer",
                            2000
                        ]}
                        wrapper="span"
                        speed={40}
                        repeat={Infinity}
                        className='text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl lg:leading-normal'
                    />
                </h1>
                <p className='text-[#c3cacf] text-lg sm:text-xl lg:text-2xl py-8'>I'm a 25-year-old Full Stack Developer from Italy. I'm a determined individual with a strong desire to learn and a strong work ethic. Passionate about innovation and problem-solving.</p>
                <div className='flex flex-col md:flex-row gap-4 mt-3 justify-center lg:justify-start'>
                    <button className='transition duration-700 px-6 inline-block py-4 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-800 via-purple-600 to-pink-500 hover:from-blue-900 hover:via-purple-800 hover:to-pink-800 text-white text-xl font-semibold'>
                        <Link className='flex flex-row justify-center items-center' href="mailto:diego.boost@gmail.com">
                            <EnvelopeIcon className='w-7 h-7 mr-2' />
                            <span>Contact Me</span>
                        </Link>
                    </button>
                    <Link href='/Resume.pdf' download target='_blank' className='transition duration-700 px-6 inline-block py-4 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#528ac2] to-[#E4EfE9] hover:from-[#305d8a] hover:to-[#808f87] text-black font-semibold text-xl'>
                        <div className='flex flex-row justify-center items-center'>
                            <ArrowDownTrayIcon className='w-7 h-7 mr-2' />
                            <span>Download CV</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='place-self-center mt-10 lg:mt-0 '>
                <div className='rounded-full bg-[#528ac2] w-[250px] h-[340px] lg:w-[300px] lg:h-[450px] relative'>
                    <Image
                        src='/images/hero-image.png'
                        alt='hero image'
                        className='absolute transform -translate-x-1/2 bottom-0 left-1/2 rounded-full'
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero