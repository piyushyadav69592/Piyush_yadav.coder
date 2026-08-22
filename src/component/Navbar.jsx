import React from 'react'
import { FaBars } from 'react-icons/fa'
import { MdClose } from "react-icons/md";
import { useState } from 'react'
// import { nav } from 'framer-motion/client'

const Navbar = () => {
    const [showmenu, setShowmenu] = useState(false)

    return (
        <nav className='bg-dark-100/90 flex  items-center backdrop-blur-sm py-6 px-4 fixed w-full z-10 text-white'>

            {/* logo */}

            <div className='flex items-center justify-between w-full max-w-7xl mx-auto'>
                <a href='#' className='flex items-center gap-1 sm:gap- text-[1.3rem] sm:text-[1.5rem] md:text-3xl lg:text-3xl font-bold leading-none'>
                    <span className='whitespace-nowrap'>Piyush_Yadav</span>
                    <span className='text-purple-500 whitespace-nowrap'>.Coder</span>
                    <span className='w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full bg-purple shrink-0'></span>
                </a>
            </div>

            {/*Navigation links */}

            <div className='hidden md:flex text-xl space-x-8'>

                <a href="#home" className='relative hover:border-b-2 border-purple-500 transition-all duration-100 group'>
                    <span className='hover:text-purple-500'>Home</span>
                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>

                <a href="#about" className='relative hover:border-b-2 border-purple-500 transition-all duration-100 group'>
                    <span className='hover:text-purple-500'>About</span>
                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>

                <a href="#skills" className=' relative hover:border-b-2 border-purple-500 transition-all duration-300 group'>
                    <span className='hover:text-purple-500'>Skills</span>
                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>

                <a href="#project" className=' relative hover:border-b-2 border-purple-500 transition-all duration-300 group'>
                    <span className='hover:text-purple-500'>Project</span>
                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>

                <a href="#" className=' relative hover:border-b-2 border-purple-500 transition-all duration-300 group'>
                    <span className='hover:text-purple-500'>Contact</span>
                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>

            </div>

            {/* mobile button */}

            <div className='md:hidden cursor-pointer'>
                {showmenu ? <MdClose onClick={() => setShowmenu(!showmenu)} size={30} /> : <FaBars onClick={() => setShowmenu(!showmenu)} size={25} />}

            </div>

            {/* mobile menu */}

            {
                showmenu && (
                    <div className='flex md:hidden mt-19 flex-col space-y-10 h-screen p-5 w-full absolute right-0 top-0 bg-dark-100/90'>

                        <a onClick={() => setShowmenu(!showmenu)} href="#home" className='relative hover:border-b-4 border-purple-500 transition-all duration-100 group'>
                            <span className='acti'>Home</span>

                        </a>

                        <a onClick={() => setShowmenu(!showmenu)} href="#about" className='relative hover:border-b-4 border-purple-500 transition-all duration-100 group'>
                            <span className='hover:text-purple-500'>About</span>

                        </a>

                        <a onClick={() => setShowmenu(!showmenu)} href="#skills" className=' relative hover:border-b-4 border-purple-500 transition-all duration-300 group'>
                            <span className='hover:text-purple-500'>Skills</span>

                        </a>

                        <a onClick={() => setShowmenu(!showmenu)} href="#project" className=' relative hover:border-b-4 border-purple-500 transition-all duration-300 group'>
                            <span className='hover:text-purple-500'>Project</span>

                        </a>

                        <a onClick={() => setShowmenu(!showmenu)} href="#" className=' relative hover:border-b-4 border-purple-500 transition-all duration-300 group'>
                            <span className='hover:text-purple-500'>Contact</span>

                        </a>

                    </div>
                )
            }

        </nav>
    )
}

export default Navbar