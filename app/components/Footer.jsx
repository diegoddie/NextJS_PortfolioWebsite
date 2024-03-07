import React from 'react'

const Footer = () => {
  return (
    <footer className='footer border border-t-black dark:border-t-white border-l-transparent border-r-transparent text-slate-800 dark:text-white md:px-20 py-5'>
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center'>
            <span className='text-3xl md:text-4xl font-signature'>Diego Lauricella</span>
            <p className='text-slate-400 text-sm mt-1 md:mt-0'>&copy; 2024 Diego Lauricella - All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer