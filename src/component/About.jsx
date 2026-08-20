import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets.js'
import { aboutInfo } from '../assets/assets.js'

const about = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className='bg-dark-100/90  h-full w-full'
        >
            {/* about me section */}


            <motion.div initial={{ opacity: 0, x: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, }}
                viewport={{ once: false, amount: 0.5 }} className='text-center w-full text-white bg-dark-100/90'>
                <h2 className='text-4xl font-bold p-3'>About <span className='text-purple-500'>Me</span></h2>
                <p className='text-lg pl-6  pr-6 pb-6 md:pl-10 text-center sm:pl:18'> I am a MERN Stack Developer skilled in UI/UX design and modern web apps. I also create impactful Canva graphics, blending coding with creativity to deliver complete digital solutions.
                </p>
            </motion.div>


            {/* profile image and description */}

            <div className='text-white container pt-6 flex flex-col sm:flex-row lg:flex-row md:flex-row h-[auto] w-full max-w-full justify-center items-center'>

                {/* profile image left panel */}

                <div className='h-[60vh]  w-full lg:w-1/2 pb-5 flex justify-center items-center'>
                    <motion.div initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration:0.9 }}
                        viewport={{ once: false, amount:0.2 }} className='h-80 w-64 overflow-hidden shadow-[15px_5px_30px_10px_rgba(147,51,234,0.5)] rounded-full md:h-100 sm:h-90 sm:w-80 lg:h-[30rem] lg:w-[25rem]'>
                        <img src={assets.projectImg10} alt="Profile Image" className='rounded-full h-full w-full object-cover' />
                    </motion.div>
                </div>

                {/* description right panel */}

                <div className='h-[auto] w-full lg:w-1/2 flex flex-col items-center sm:p-4 sm:p-10 lg:p-4'>

                    {/* content */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.5 }}>
                        <h3 className='text-3xl font-bold mb-4'><span className='text-purple-500 p-4'>My</span> journey </h3>
                        <p className='p-4 mb-4'> Self taught MERN Stack Developer and AI Educator, pursuing B.Sc. PCM at Lucknow University.
                            Skilled in React, Node.js, MongoDB, Express.js, Canva, Figma, and MS Office, with hands on project experience.
                            Passionate about technology and teaching, I empower students with 20+ practical AI tools while preparing for impactful IT roles.
                        </p>


                    </motion.div>

                    {/* card */}
                    <div className='grid gap-5   grid-cols-4'>

                        {aboutInfo.map((data, index) =>
                            <motion.div whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.1 }
                            }}
                                transition={{ duration: 0.5 }}
                                // scroll animation 
                                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 1, }}
                                viewport={{ once: false, amount: 0.5 }}

                                key={index} className='bg-white/10 p-4 col-span-2 h-full w-full  rounded-lg shadow-lg mb-4 w-1/2'>
                                {data.icon && <data.icon className={`text-4xl ${data.color} mb-2`} />}
                                <h4 className='text-xl font-bold mb-2'>{data.title}</h4>
                                <p className='text-gray-300'>{data.description}</p>
                            </motion.div>
                        )}

                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default about