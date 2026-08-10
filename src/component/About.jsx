import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets.js'

const about = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className='bg-dark-100/90 h-full w-full '
        >
            {/* about me section */}


            <motion.div initial={{ opacity: 0, x: 20,scale:0.9 }}
                whileInView={{ opacity: 1, x: 0,scale: 1 }}
                transition={{ duration: 1,  }}
                viewport={{ once: false, }} className='text-center w-full text-white bg-dark-100/90'>
                <h2 className='text-4xl font-bold p-3'>About <span className='text-purple-500'>Me</span></h2>
                <p className='text-lg pl-6  pr-6 pb-6 md:pl-10 text-center sm:pl:18'> I am a MERN Stack Developer skilled in UI/UX design and modern web apps. I also create impactful Canva graphics, blending coding with creativity to deliver complete digital solutions.
                </p>
            </motion.div>

            <hr className='text-white m-1' />

            {/* profile image and description */}

            <div className='text-white container pt-6 flex flex-col sm:flex-row lg:flex-row md:flex-row h-screen w-full justify-center items-center'>

                {/* profile image left panel */}

                <div className='h-full  w-full lg:w-1/2 pb-5 flex justify-center items-center'>
                    <motion.div initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: false }} className='bg-red-400 h-80 w-64 overflow-hidden shadow-[15px_5px_30px_10px_rgba(147,51,234,0.5)] rounded-full md:h-100 sm:h-90 sm:w-80 lg:h-[30rem] lg:w-[25rem]'>
                        <img src={assets.projectImg10} alt="Profile Image" className='rounded-full h-full w-full object-cover' />
                    </motion.div>
                </div>

                {/* description right panel */}

                <div className='bg-blue-500 h-full w-full lg:w-1/2 flex flex-col justify-center items-center p-4 sm:p-10 lg:p-20'>
                    <div> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum eum fugit laudantium ipsam quam ducimus iusto quo vel perferendis nulla.
                    </div>
                    <div>
                        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default about