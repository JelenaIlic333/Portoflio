import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
  <div className='mt-20 text-center'>
  <div className='font-bold text-2xl font-Ovo cursor-pointer text-black dark:text-white mb-2'>
    Jelena<span className='text-[#f02d66]'>.</span>
  </div>

  <div className='w-max flex items-center gap-2 mx-auto text-black dark:text-white text-sm'>
    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='Mail icon' className='w-5' />
    madicjelena23@gmail.com
  </div>

    <div className='text-center sm:flex items-center justify-between 
    border-t border-gray-400 mx-[10%] my-12 py-6'>
        <p>© 2025 Jelena Ilic. All right reserved. </p>
        <ul className='flex items-start gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/JelenaIlic333">GitHub</a></li>
            <li><a target='_blank' href="https://github.com/JelenaIlic333">LinedIn</a></li>
            <li><a target='_blank' href="https://github.com/JelenaIlic333">GitHub</a></li>
        </ul>
    </div>

    </div>
  )
}

export default Footer
