import React from 'react'
import logo from '../public/demola.jpg'
import {motion} from 'framer-motion'

type Props = {
 
}

export default function  ({}: Props) {
  return (
	<article className='flex flex-col rounded-lg
   items-center space-y-7 flex-shrink-0  w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-7 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'

   > 
   <motion.img 
    className='w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center'
    src = "https://cdn.sanity.io/images/axmlzruv/production/24201bdc170862d54b2e7e753a75df367991b8cd-1080x1080.jpg"
    transition = {{
      duration : 1.2
    }}
    whileInView = {{
      opacity : 1 , y : 0
    }}
    viewport = {{once : true}}
   />
	 <div className = "px-0 md:px-10">
    <h4 className='text-4xl font-light'>CEO OF CODELIN</h4>
    <p className='font-bold text-2xl mt-1'>CODELINE</p>
    <div className='flex space-x-2 my-2' >
      <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/axmlzruv/production/24201bdc170862d54b2e7e753a75df367991b8cd-1080x1080.jpg" alt="" />
      <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/axmlzruv/production/24201bdc170862d54b2e7e753a75df367991b8cd-1080x1080.jpg" alt="" />
      <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/axmlzruv/production/24201bdc170862d54b2e7e753a75df367991b8cd-1080x1080.jpg" alt="" />
      {/* Tech Used */}
    </div>
    <p className = "uppercase py-5 text-gray-500">Started work ... -Ended</p>
    <ul className='list-disc space-y-4 ml-5  text-lg'>
     <li>Summary Points Summary </li>
     
    </ul>

   </div>
  </article>
  )

  
}