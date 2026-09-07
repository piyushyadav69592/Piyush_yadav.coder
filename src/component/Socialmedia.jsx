import React from 'react'
import { motion } from 'framer-motion'
import { FaShareAlt, FaWhatsapp } from 'react-icons/fa'
import { socialLinks } from '../assets/assets.js'


const Socialmedia = () => {
    const handleShare = async () => {
        const shareData = {
            title: 'My Portfolio',
            text: 'Check out my portfolio',
            url: window.location.href
        };

        if (navigator.share) {
            await navigator.share(shareData);
        } else {
            await navigator.clipboard.writeText(window.location.href);
            window.alert('Portfolio link copied!');
        }
    };

    return (
        <section id='social' className='w-full overflow-hidden bg-dark-100/90 px-5 py-20 text-white sm:px-10 lg:px-20'>
            <div className=' max-w-6xl'>
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.5 }}
                    className='mb-10 max-w-2xl'
                >
                    <p className='mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400'>Let's connect</p>
                    <h2 className='text-3xl font-bold sm:text-4xl'>Find me <span className='text-purple-500'>online</span></h2>
                    <p className='mt-3 text-base text-gray-400'>Explore my work, creative experiments, and professional journey across these platforms.</p>

                    <div className='mt-8'>
                        <hr className='mb-1' />
                        <hr className='mb-10'></hr>
                    </div>
                </motion.div>

                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5'>
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            target='_blank'
                            rel='noreferrer'
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.5 }}
                            className='group relative overflow-hidden rounded-xl border border-white/10 bg-dark-200/80 p-5 shadow-lg shadow-black/10 transition-colors duration-300 hover:border-purple-400/60'
                        >
                            <div className={`absolute inset-x-0 top-0 h-4 bg-gradient-to-r ${link.color}`} />
                            <div className='flex items-center mt-2 justify-between'>
                                <motion.span
                                    whileHover={{ rotate: 8, scale: 1.12 }}
                                    className={`flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-xl ${link.iconColor}`}
                                >
                                    <link.icon />
                                </motion.span>
                                <span className='text-xl text-gray-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-purple-400'>-&gt;</span>
                            </div>
                            <h3 className='mt-5 text-lg font-semibold'>{link.name}</h3>
                            <p className='mt-1 truncate text-sm text-gray-400'>{link.handle}</p>
                            <span className='mt-5 block text-xs font-medium uppercase tracking-wider text-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>Visit profile</span>
                        </motion.a>
                    ))}
                </div>
            </div>
            {/* fixed portfolio share button */}
            <motion.button
                type='button'
                onClick={handleShare}
                aria-label='Share this portfolio'
                title='Share this portfolio'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='fixed right-5 bottom-24 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-2xl text-white shadow-lg shadow-blue-500/30 transition-colors duration-300 hover:bg-blue-600 sm:right-7 sm:bottom-24'
            >
                <FaShareAlt />
            </motion.button>

            {/* fixed WhatsApp contact button */}
            <motion.a
                href='https://wa.me/919336707358'
                target='_blank'
                rel='noreferrer'
                aria-label='Chat with me on WhatsApp'
                title='Chat with me on WhatsApp'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-lg shadow-green-500/30 transition-colors duration-300 hover:bg-green-600 sm:right-7 sm:bottom-7'
            >
                <FaWhatsapp />
            </motion.a>
        </section>
    )
}

export default Socialmedia