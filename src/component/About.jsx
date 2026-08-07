import React from 'react'
import { motion } from 'framer-motion'

const about = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='bg-dark-100/90'
        >
            <div className='text-center text-white bg-dark-100/90'>
                <h2>About <span>Me</span></h2>
                <p> I am a MERN Stack Developer skilled in UI/UX design and modern web apps. I also create impactful Canva graphics, blending coding with creativity to deliver complete digital solutions.
                </p>
            </div>
        </motion.div>
    )
}

export default about