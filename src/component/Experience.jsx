import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { crausel } from '../assets/assets.js'

const Experience = () => {
    const animationControls = useAnimation()

    const startCarousel = () => animationControls.start({
        x: ['0%', '-50%'],
        transition: { duration: 25, ease: 'linear', repeat: Infinity },
    })

    useEffect(() => {
        startCarousel()
    }, [])

    return (
        <div className='bg-dark-100/90  h-full w-full flex flex-col item-center justify-center'>

            <motion.div initial={{ opacity: 0, x: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, }}
                viewport={{ once: false, amount: 0.5 }} className=' w-full text-white bg-dark-100/90'>
                <h2 className='text-4xl text-center font-bold pt-6 p-3'>My <span className='text-purple-500'>Experience</span></h2>
                <p className='t ext-lg pl-6 text-center  pr-6 pb-6 md:pl-10  sm:pl:18'>Selftaught MERN Stack Developer and AI Tools Instructor, building real world projects and teaching modern technologies
                </p>
            </motion.div>

            {/* crausal */}

            <div className='scrollbar-hide w-full h-ful pt-10 pb-5 overflow-hidden'>
                <motion.div
                    className='flex w-max gap-4 p-4'
                    animate={animationControls}
                    onHoverStart={() => animationControls.stop()}
                    onHoverEnd={startCarousel}
                >
                    {[...crausel, ...crausel].map((image, index) => (
                        <img
                            key={`${image}-${index}`}
                            src={image}
                            alt={`Carousel Image ${index + 1}`}
                            className='h-64 w-[85vw] shrink-0 object-cover md:h-80 md:w-[32rem]'
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Experience