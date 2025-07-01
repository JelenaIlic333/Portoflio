import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/22 max-w-3x1 text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
      </div>
          <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
            Hi! I'm Jelena Ilic </h3>  <Image src={assets.hand_icon} alt='' className='w-6'/>
            <h1 className='text-3x1 sm:text-6x1 lg:text-[66px] font-Ovo'>
                frontend web developer
            </h1>
            <p className='max-w-2x1 mx-auto font-Ovo'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Quia, eaque laborum laboriosam iure qui accusamus iste earum et dolores commodi!
            </p>
            <div className='flex glex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex
                items-center gap-2'>contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/></a>

                <a href="/sample-resume.pdf" download 
                className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
                my resume <Image src={assets.download_icon} alt='' className='w-4'/></a>
            </div>
    </div>
  )
}

export default Header
