"use client";

import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton';
import { ABOUT_DATA } from "../utils/aboutData";

const About = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section className='text-[#595d60] dark:text-white py-10 lg:py-20' id="about">
            <h2 className="text-center text-4xl font-bold mt-4 mb-4 lg:mb-8">
                About Me
            </h2>
            <div className='flex flex-col lg:flex-row gap-6 lg:gap-2 py-4 px-2 xl:gap-16 xl:px-10'>
                <Image src='/images/about-image.png' width={500} height={300} className='mx-auto'/>
                <div className='mt-4 lg:mt-0 text-left flex flex-col h-full'>
                    <p className='text-base text-left mb-4 2xl:text-lg'>I've been programming since 2021, my first programming language was Python and then I expandend my expertise with other languages and libraries like the MERN stack. <br/><br/> In 2022 I enrolled in Start2Impact University: an italian B-CORP known for for its commitment to providing innovative and sustainable education. I completed two masters with Start2Impact, recognized for its project-based approach supervised by industry experts.</p>
                    <div className="flex flex-row justify-center items-center mt-5 gap-4">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {ABOUT_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About