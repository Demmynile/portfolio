import React from 'react'
import logo from '../public/demola.jpg'
import { urlFor } from '../sanity'
import { Experience } from '../typings'

type Props = {
  experiences : Experience
}

export default function  ({experiences}: Props) {
  return (
	<article> 
   <img 
    className='w-32 h-32  rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
    src = {urlFor(experiences?.companyImage).url()}
   
   />
	
  </article>
  )

  
}