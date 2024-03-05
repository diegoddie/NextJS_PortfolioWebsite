"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay';
import ThemeSwitch from './ThemeSwitch';

const navLinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Portfolio",
      path: "#portfolio",
    },
    {
        title: "Services",
        path: "#services",
      },
    {
      title: "Contact",
      path: "#contact",
    },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed mx-auto border-b border-b-white top-0 left-0 right-0 z-10 bg-slate-200 dark:bg-[#121212] bg-opacity-100">
            <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-8 py-2'>
                <Link href={'/'} className='text-4xl lg:text-5xl text-white font-signature'>Diego Lauricella</Link>
                <div className='mobile-menu flex lg:hidden items-center'>
                    <div className='cursor-pointer text-3xl mr-4'>
                        <ThemeSwitch />
                    </div>
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <Bars3Icon className='h-6 w-6' />
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <XMarkIcon className='h-6 w-6' />
                            </button>
                        )
                    }
                </div>
                <div className='menu hidden lg:flex lg:w-auto items-center' id='navbar'>
                    <div className='cursor-pointer text-3xl mr-6'>
                        <ThemeSwitch />
                    </div>
                    <ul className="flex p-4 lg:p-0 lg:flex-row lg:space-x-8 mt-0">
                        {
                            navLinks.map((link,index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default Navbar