import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets.js'
import { assets } from '../assets/assets.js'

const Skill = () => {
    return (
        <div className='bg-dark-100/90  h-full w-full'>
            {/* my skill */}

            <motion.div initial={{ opacity: 0, x: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, }}
                viewport={{ once: false, amount: 0.5 }} className=' w-full text-white bg-dark-100/90'>
                <h2 className='text-4xl text-center font-bold pt-6 p-3'>My <span className='text-purple-500'>Skills</span></h2>
                <p className='text-lg pl-6 text-center  pr-6 pb-6 md:pl-10  sm:pl:18'> Skilled MERN Stack Developer with expertise in React, Node.js, MongoDB, Express.js, Bootstrap, and Framer Motion.
                    Experienced in UI/UX design using Canva and Figma, delivering practical and creative solutions.
                </p>
            </motion.div>

            {/*skills*/}

            <div className='flex flex-wrap justify-center pt-8  items-center gap-4 p-5 bg-dark-100/'>
                {skills.map((skill, index) =>
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.1 }
                        }}
                        transition={{ duration: 0.5 }}
                        // scroll animation 
                        initial={{ opacity: 0, x: 20, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, }}
                        viewport={{ once: false, amount: 0.5 }}
                        className='w-full max-w-[360px] text-white m-2 p-4 bg-white/10 rounded-lg shadow-lg'>
                        <div className='flex  gap-4 mb-2 items-center'>
                            {skill.icon && <skill.icon className={`text-4xl text-green-500 mb-2`} />}
                            <h1 className='text-xl font-semibold'>{skill.title}</h1>
                        </div>
                        <p className='text-gray-300  mb-4 '>{skill.description}</p>
                        <div>
                            {skill.tags && skill.tags.map((tag, index) => (
                                <span key={index} className='inline-block bg-purple-500 text-white text-xs px-2 py-1 rounded-full mr-2 mb-2'>
                                    {tag}
                                </span>
                            ))}
                        </div>

                    </motion.div>
                )}
            </div>

        </div >
    )
}

export default Skill