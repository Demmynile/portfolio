import React from 'react'
import {motion} from "framer-motion"

type Props = {}

function Projects({}: Props) {

	const projects = [1,2,3,4,5]
  return (
	<div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
		Projects
	  </h3>

	  <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20' >
	  {projects.map((project , i) => (
		<div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen' key = {i}>
           <motion.img
		   initial = {{
			y : -300,
			opacity : 0
		   }}
          
		   transition = {{duration : 1.2}}
		   whileInView = {{opacity: 1 , y :0}}
		   viewport = {{once : true}}
		    src = "https://cdn.sanity.io/images/axmlzruv/production/24201bdc170862d54b2e7e753a75df367991b8cd-1080x1080.jpg"
			alt =""
			className='w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center'
		 
		 
		    />
                
		
		<div className='space-y-10 px-0 md:px-10 max-w-6xl'>
           <h4 className='text-4xl font-semibold text-center'>
			 <span className='underline decoration-[#F7AB0A]/50'>
				Case Study {i + 1} of {projects.length}:
			 </span>{" "}
			 UPS clone
		   </h4>
		</div>
           <p className='text-lg text-center md:text-left'>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis corporis 
			inventore cumque reprehenderit autem quia dolorem! Quos quam corporis consequuntur
			illum enim vero, sunt harum sint. Adipisci odio nam neque!
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis corporis 
			inventore cumque reprehenderit autem quia dolorem! Quos quam corporis consequuntur
			illum enim vero, sunt harum sint. Adipisci odio nam neque!
		   </p>
		</div>
	  ))}
	  </div>

	  <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />


	</div>
  )
}

export default Projects