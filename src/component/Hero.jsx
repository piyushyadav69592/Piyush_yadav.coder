import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets.js'

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}

            className='min-h-screen lg:h-screen w-full bg-dark-100/90 flex flex-col items-center  text-white sm:flex-row'
        >
            {/* left pannel */}

            <div className='w-full flex items-center min-h-[60vh] px-6 py-12 sm:w-1/2 sm:h-screen sm:px-15 sm:pt-50'>
                <motion.div initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    viewport={{ once: false }} className='w-full'>
                    <h1 className='text-[2.5rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold'>Hi, I'm <span className='text-purple-500'> Piyush Yadav</span></h1>
                    <h2 className='text-[1.5rem] font-medium typeWriter '>MERN Stack Developer</h2>
                    <p className='text-[1rem] mt-4'>I create stunning web experience with modern technology and innovative design.</p>

                    <div className='flex flex-col lg:flex-row lg:space-x-9 space-y-7 mt-10'>
                        <a href='#project' className='hover:scale-97 hover:bg-purple-600 transition duation-300 text-xl font-medium bg-purple-500 text-white lg:w-2/5 sm:w-full p-4 rounded-md hover:shadow-lg shadow-purple-500/40 text-center'>View Work</a>

                        <a href='contact' className='inline-flex items-center justify-center rounded-md border-[3px] border-purple-500 px-6 py-3 lg:w-2/5 sm:w-full lg:h-[4rem] text-lg font-medium text-white transition duration-300 hover:scale-[0.97] hover:bg-purple/20 hover:shadow-lg hover:shadow-purple-500/40 sm:w-auto'>Contact Me</a>
                    </div>
                </motion.div>
            </div>

            {/* right pannel */}

            <div className='w-full flex items-center justify-center px-4 py-8 sm:w-1/2 sm:min-h-screen sm:py-10 lg:mt-[8rem]'>

                <motion.div initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    viewport={{ once: false }} className='w-full mt-[-4rem] max-w-[17rem] rounded-tl-[10vw] sm:max-w-[22rem] lg:max-w-[23rem]'>
                    <img src={assets.profileImg} alt="profile img" className='w-full h-auto rounded-[10vw] object-cover shadow-[15px_5px_30px_10px_rgba(147,51,234,0.5)] shadow-purple-500/80 ' />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Hero