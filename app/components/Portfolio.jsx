'use client';

import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import { PROJECTS_DATA } from "../utils/projectsData";
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion'


const Portfolio = () => {
    const [tag, setTag] = useState("All")
    const [showAll, setShowAll] = useState(false);

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };
    
    const handleTagChange = (newTag) => {
        setTag(newTag);
        setShowAll(false);
    }

    const handleShowMore = () => {
        setShowAll(true);
    };

    const filteredProjects = PROJECTS_DATA.filter((project) => {
        return project.tag.includes(tag);
    });

    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

    return (
        <section id="portfolio" className='py-10 md:py-20 md:px-6 text-[#595d60] dark:text-white'>
            <h2 className="text-center text-4xl font-bold mt-4 mb-4 md:mb-8">
                Portfolio
            </h2>
            <div className='flex flex-wrap justify-center items-center gap-2 pb-6'>
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={handleTagChange} name="Full Stack" isSelected={tag === "Full Stack"} />
                <ProjectTag onClick={handleTagChange} name="Blockchain" isSelected={tag === "Blockchain"} />
                <ProjectTag onClick={handleTagChange} name="Front End" isSelected={tag === "Front End"} />
            </div>
            <ul ref={ref} className='grid lg:grid-cols-3 gap-8 lg:gap-12 mt-4'>
                {displayedProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard 
                            key={project.id} 
                            title={project.title} 
                            description={project.description} 
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
            {!showAll && filteredProjects.length > 6 && (
                <div className="text-center mt-6">
                    <button onClick={handleShowMore} className="transition duration-200 border-blue-300 dark:border-purple-500 hover:bg-blue-300 dark:hover:bg-purple-500 rounded-full border-2 px-6 py-3 text-xl cursor-pointer">
                        Show More
                    </button>
                </div>
            )}
        </section>
    )
}

export default Portfolio