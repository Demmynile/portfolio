import React from 'react'
import {motion} from 'framer-motion'
import logo from '../public/demola.jpg'
import { StaticImageData } from 'next/image'
import { url } from 'inspector'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'





type Props = {
	pageInfo : PageInfo
}

export default function About({pageInfo}: Props ) {
	
	
  return (
	<div className='flex flex-col relative h-screen text-center md:text-left md:flex-row  
     	max-w-7xl px-10 justify-evenly mx-auto items-center'>
     <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
		About
	 </h3>
     <motion.img
		initial = {{
			x : -200,
		}} 

		whileInView={{x:0}}
		viewport={{once : true}}
        src={urlFor(pageInfo?.profilePic).url()}
		className = "-mb-20 mt-10 sm:w-[300px] sm:rounded-full sm:h-[300px] md:mb-0 flex-shrink-0 w-[200px] h-[100px] rounded-full object-cover md:rounded-lg md:w-[200px] md:h-[300px] lg:w-[500px] lg:h-[400px]"
	
    />
	<motion.div 
	initial = {{
		x : -200,
	}} 
    transition = {{
		duration : 1.2
	}}
	whileInView={{opacity : 1 , x:0}}
	viewport={{once : true}}
	className='space-y-10 px-0 md:px-10'>
		<h4 className='text-4xl font-semibold'>
			Here is a {""}
			<span className='underline decoration-[#F7AB0A]/50'>Little</span>{" "}
			background
		</h4>
		<p className='text-base'>
		A Versatile and focused Frontend Developer with 3 years experience writing quality secure and scalable code for high-paced businesses. Context-oriented with awesome skills in multi-tasking and problem-solving skills. 
		Efficient at building and maintaining team 
		collaborations and clients through good interpersonal skills.
		</p>

	</motion.div>
	</div>
  )
} 