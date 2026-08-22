import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets.js'

const Skill = () => {
    return (
        <div className='bg-dark-100/90  h-full w-full'>
            {/* my project */}

            <motion.div initial={{ opacity: 0, x: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, }}
                viewport={{ once: false, amount: 0.5 }} className=' w-full text-white bg-dark-100/90'>
                <h2 className='text-4xl text-center font-bold pt-6 p-3'>My <span className='text-purple-500'>Project</span></h2>
                <p className='text-lg pl-6 text-center  pr-6 pb-6 md:pl-10  sm:pl:18'>Self taught MERN Stack Developer with proven hands on experience, building projects from interactive games to practical tools like PDF Merger, Calculator, CRUD apps, and Analog Clock — showcasing creativity, problem solving, and job ready skills
                </p>
            </motion.div>

            {/*project*/}

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-5 md:p-8 bg-dark-100'>
                {projects.map((project) =>
                    <motion.div
                        key={project.title}
                        whileHover={{
                            y: -6,
                            transition: { duration: 0.2 }
                        }}
                        initial={{ opacity: 0, x: 20, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className='flex h-full flex-col overflow-hidden text-white rounded-xl border border-white/10 bg-white/10 shadow-lg'>
                        <img
                            src={project.image}
                            alt={project.title}
                            className='h-48 w-full object-cover'
                        />
                        <div className='flex flex-1 flex-col p-5'>
                            <h3 className='mb-2 text-xl font-semibold'>{project.title}</h3>
                            <p className='mb-5 flex-1 text-gray-300'>{project.description}</p>
                            <div className='mb-5 flex flex-wrap gap-2'>
                                {project.tech.map((tech, techIndex) => {
                                    const Icon = project.icons?.[techIndex]
                                    return (
                                        <span key={tech} className='inline-flex items-center gap-1.5 rounded-full bg-purple-500/80 px-2.5 py-1 text-xs text-white'>
                                            {Icon && <Icon aria-hidden='true' />}
                                            {tech}
                                        </span>
                                    )
                                })}
                            </div>
                            <div className='flex gap-3'>
                                <a href={project.demo} className='rounded-md bg-purple-500 px-4 py-2 text-sm font-medium transition hover:bg-purple-400'>Live Demo</a>
                                <a href={project.code} className='rounded-md border border-white/20 px-4 py-2 text-sm font-medium transition hover:bg-white/10'>View Code</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>

        </div >
    )
}

export default Skill