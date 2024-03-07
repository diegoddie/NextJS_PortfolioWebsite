import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected ? "text-[#595d60] dark:text-white border-blue-500 dark:border-purple-500" : "text-slate-400 dark:text-[#c3cacf] border-slate-400 dark:border-slate-800 hover:border-black dark:hover:border-white"
    
    return (
        <button
            className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer hover:text-[#595d60] dark:hover:text-white`}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
    )
}

export default ProjectTag