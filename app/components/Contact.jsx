"use client";

import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { SiFiverr, SiUpwork } from "react-icons/si";
import Link from 'next/link';

const Contact = () => {
    return (
        <section className='py-10 md:py-20 md:px-6 text-[#595d60] dark:text-white' id='contact'>
            <h2 className="text-center text-4xl font-bold mt-4 mb-4 md:mb-8">
                Contact Me
            </h2>
            <div className='grid lg:grid-cols-2 gap-4 relative'>
                <div className="z-10">
                    <h5 className='text-xl font-bold my-2'>Let's Connect</h5>
                    <p className=' dark:text-[#c3cacf] mb-4 lg:max-w-md text-lg'>
                        {" "}
                        I'm currently looking for new opportunities, my inbox is always
                        open. Whether you have a question or just want to say hi, I'll
                        try my best to get back to you!
                    </p>
                    <div className='socials flex flex-wrap gap-4 mt-8 mb-8 lg:mb-0 justify-center lg:justify-start'>
                        <Link href="https://github.com/diegoddie" target='_blank'>
                            <FaGithub className='h-10 w-10 md:h-12 md:w-12 transition duration-200 dark:text-white hover:text-slate-900 dark:hover:text-slate-500'/>
                        </Link>
                        <Link href='https://www.linkedin.com/in/diegolauricella' target='_blank'>
                            <FaLinkedin className='h-10 w-10 md:h-12 md:w-12 transition duration-200 dark:text-white hover:text-slate-900 dark:hover:text-slate-500'/>
                        </Link>
                        <Link href="mailto:diego.boost@gmail.com">
                            <MdMail className='h-10 w-10 md:h-12 md:w-12 transition duration-200 dark:text-white hover:text-slate-900 dark:hover:text-slate-500'/>
                        </Link>
                        <Link href="https://www.fiverr.com/diegoddie" target='_blank'>
                            <SiFiverr className='h-10 w-10 md:h-12 md:w-12 transition duration-200 dark:text-white hover:text-slate-900 dark:hover:text-slate-500'/>
                        </Link>
                        <Link href="https://www.upwork.com/freelancers/diegoddie" target='_blank'>
                            <SiUpwork className='h-10 w-10 md:h-12 md:w-12 transition duration-200 dark:text-white hover:text-slate-900 dark:hover:text-slate-500'/>
                        </Link>
                        <Link href='https://twitter.com/diegothedev' target='_blank'>
                            <FaTwitter className='h-10 w-10 md:h-12 md:w-12 transition duration-200 dark:text-white hover:text-slate-900 dark:hover:text-slate-500'/>
                        </Link>
                    </div>
                </div>
                <div>
                    <form className="flex flex-col" action="https://getform.io/f/qalpmmda" method="POST">
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="dark:text-white block mb-2 text-sm font-medium"
                            >
                                Your email
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                className="bg-blue-100 dark:bg-[#18191E] border border-[#33353F] placeholder:text-gray-400 dark:placeholder-[#9CA2A9] text-gray-500 dark:text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="jacob@google.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="subject"
                                className="dark:text-white block text-sm mb-2 font-medium"
                            >
                                Subject
                            </label>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                required
                                className="bg-blue-100 dark:bg-[#18191E] border border-[#33353F] placeholder:text-gray-400 dark:placeholder-[#9CA2A9] text-gray-500 dark:text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Just saying hi"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="dark:text-white block text-sm mb-2 font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className="bg-blue-100 dark:bg-[#18191E] border border-[#33353F] placeholder:text-gray-400 dark:placeholder-[#9CA2A9] text-gray-500 dark:text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Let's talk about..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-400 dark:bg-purple-500 hover:bg-blue-600 dark:hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact