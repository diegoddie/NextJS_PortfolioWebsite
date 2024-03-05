'use client';

import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import { PROJECTS_DATA } from "../utils/projectsData";
import ProjectTag from './ProjectTag';

const Portfolio = () => {
    const [tag, setTag] = useState("All")
    const [showAll, setShowAll] = useState(false);

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
        <section id="portfolio" className='py-10 md:py-20 md:px-6'>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-8">
                Portfolio
            </h2>
            <div className='text-white flex flex-wrap justify-center items-center gap-2 pb-6'>
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={handleTagChange} name="Full Stack" isSelected={tag === "Full Stack"} />
                <ProjectTag onClick={handleTagChange} name="Blockchain" isSelected={tag === "Blockchain"} />
                <ProjectTag onClick={handleTagChange} name="Front End" isSelected={tag === "Front End"} />
            </div>
            <div className='grid lg:grid-cols-3 gap-8 lg
            :gap-12 mt-4'>
                {displayedProjects.map((project) => (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
            {!showAll && filteredProjects.length > 6 && (
                <div className="text-center mt-6">
                    <button onClick={handleShowMore} className="text-white transition duration-200 border-purple-500 hover:bg-purple-500 rounded-full border-2 px-6 py-3 text-xl cursor-pointer">
                        Show More
                    </button>
                </div>
            )}
        </section>
    )
}

export default Portfolio