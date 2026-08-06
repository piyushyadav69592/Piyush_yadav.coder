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

            className='min-h-full min-w-100 bg-dark-100/90 flex flex-col items-center text-white sm:flex-row'
        >
            {/* left pannel */}

            <div className='w-full min-h-[90vh] p-15 pt-24 sm:w-1/2 sm:h-screen sm:pt-50'>
            <div>
                <h1 className='text-[3.4rem] font-bold'>Hi, I'm <span className='text-purple-500'> Piyush Yadav</span></h1>
                <h2 className='text-[2rem] font-medium typeWriter '>MERN Stack Developer</h2>
                <p className='text-xl mt-4'>I create stunning web experience with modern technology and innovative design.</p>

                <div className='flex space-x-8 mt-10 '>
                    <a href='#project' className='hover:scale-97 hover:bg-purple-600 transition duation-300 text-xl font-medium bg-purple-500 text-white py-3  px-6 rounded-md hover:shadow-lg shadow-purple-500/40'>View Work</a> 

                    <a href='contect' className='hover:scale-97 text-xl text-white font-medium  py-3 px-6 rounded-md border-3 border-purple-500 hover:shadow-lg shadow-purple-500/40 hover:bg-purple/20'>Contect Me</a>
                </div>
            </div>
            </div>

            {/* right pannel */}

            <div className='w-full min-h-[70vh]  sm:w-1/2 sm:h-screen sm:pt-50 flex item-center justify-center  '>
                <div className='h-60 w-80  rounded-tl-[10vw] '>
                    <img src={assets.profileImg} alt="profile img" className='rounded-[10vw] shadow-[15px_5px_30px_10px_rgba(147,51,234,0.5)] shadow-purple-500/80 mt-[-3rem]' />
                </div>
            </div>
        </motion.div>
    )
}

export default Hero