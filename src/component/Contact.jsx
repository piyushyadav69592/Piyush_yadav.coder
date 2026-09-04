import React from 'react'
import { motion } from 'framer-motion'
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import resumePdf from '../assets/resume.pdf';

const Contact = () => {
    return (
        <div className='bg-dark-100/90'>

            {/* work with me  */}

            <motion.div initial={{ opacity: 0, x: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, }}
                viewport={{ once: false, amount: 0.5 }} className=' w-full text-white bg-dark-100/90'>
                <h2 className='text-4xl text-center font-bold pt-6 p-3'>Work  <span className='text-purple-500'>With Me</span></h2>
                <p className='text-lg pl-6 text-center  pr-6 pb-6 md:pl-10  sm:pl:18'> Let’s collaborate to build impactful digital solutions together
                </p>
            </motion.div>

            {/* contact form */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-5 '>
                <motion.div
                    initial={{ opacity: 0, x: -35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.5 }}
                    className='pl-6'>
                    <form action='https://formsubmit.co/piyushyadav969549@gmail.com' method='POST' className='space-y-5'>
                        <div>
                            <label htmlFor='name' className='text-white  block text-xl pl-2 font-semibold'>Your Name</label>
                            <input type='text' name='name' id='name' required className='bg-dark-200  rounded-xl text-white placeholder:text-gray-500 border border-gray-600 p-3 w-full' placeholder='Enter Your Name' />
                        </div>
                        <div>
                            <label htmlFor='email' className='text-white block text-xl pl-2 font-semibold'>Your Email Address</label>
                            <input type='email' name='email' id='email' required className='bg-dark-200  rounded-xl text-white placeholder:text-gray-500 border border-gray-600 p-3 w-full' placeholder='Enter Your Email Address' />
                        </div>
                        <div>
                            <label htmlFor='message' className='text-white block text-xl pl-2 font-semibold'>Your Message</label>
                            <textarea name='message' id='message' required className='bg-dark-200 rounded-xl text-white placeholder:text-gray-500 border border-gray-600 p-3 h-[6rem] w-full' placeholder='Enter Your Message' />
                        </div>
                        <button type='submit' className='bg-purple-500  rounded-xl text-xl text-white font-bold p-3 w-2/2 hover:bg-purple-600 active:scale-95'>Send Message</button>
                    </form>
                </motion.div>

                {/* contact information */}

                <motion.div
                    initial={{ opacity: 0, x: 35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.5 }}
                    className='space-y-10 mt-8 pl-6'>
                    <div>
                        <div className='flex gap-3'>
                            <FaLocationDot className='text-white' size='30' />
                            <h3 className='text-xl font-bold text-white'>Location</h3>
                        </div>
                        <p className=' text-gray-400 pl-10'>karemuwa Pure Kushal post Revali Salon  Raebareli</p>
                    </div>
                    <div>
                        <div className='flex gap-3'>
                            {/* <FaLocationDot  /> */}
                            <HiOutlineMail className='text-white' size='30' />
                            <h3 className='text-xl font-bold text-white'>Email</h3>
                        </div>
                        <p className=' text-gray-400 pl-10'>piyushyadav969549@gmail.com</p>
                    </div>
                    <div>
                        <div className='flex gap-3'>
                            <FaPhoneFlip className='text-white' size='28' />
                            <h3 className='text-xl font-bold text-white'>Phone</h3>
                        </div>
                        <p className=' text-gray-400 pl-10'>+91 93367-07358</p>
                    </div>

                    {/* download resume */}
                    <div className='pb-10 item-center '>
                        <a
                            href={resumePdf}
                            target='_blank'
                            download
                            className='text-xl text-gray/50 w-full text-center font-bold p-3 rounded-xl bg-green-500 hover:bg-green-600 inline-block'
                        >
                            Open Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact