import React from 'react'
import { motion } from 'framer-motion'
import { socialLinks } from '../assets/assets.js'

const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
]

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{duration: 0.45, delay: 0.08, ease: 'easeOut' }}
            className='border-t border-white/10 bg-dark-100 text-white'
        >
            <div className='mx-auto w-full  px-12 py-5 '>
                <div className='flex flex-col gap-8 md:flex-row md:items-center md:justify-between'>
                    <div>
                        <p className='text-sm uppercase tracking-[0.25em] text-purple-300'>Portfolio</p>
                        <h3 className='mt-2 text-2xl font-bold'>Piyush Yadav</h3>
                        <p className='mt-2 max-w-md text-sm text-gray-400'>
                            Building clean digital experiences with thoughtful design and practical solutions.
                        </p>
                    </div>

                    <nav className='flex flex-wrap items-center gap-4 text-[1rem] text-gray-300 md:justify-center'>
                        {footerLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className='transition-colors duration-300 hover:text-purple-400'
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className='flex items-center gap-3'>
                        {socialLinks.map((item) => {
                            const Icon = item.icon
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label={item.name}
                                    className='flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/40 hover:border-purple-400 hover:text-purple-300'
                                >
                                    <Icon />
                                </a>
                            )
                        })}
                    </div>
                </div>

                <div className='mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row md:items-center md:justify-between'>
                    <p>© {year} Piyush Yadav. All rights reserved.</p>
                    <p>Made with React and Tailwind CSS.</p>
                </div>
            </div>
        </motion.footer>
    )
}

export default Footer