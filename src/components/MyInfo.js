import React from 'react'
import img from '../assets/Images/profile-img.png'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const MyInfo = ({ yinYang }) => {

	const Box = styled(motion.div)``

	return (
		<Box
		  initial={{ height: 0 }} 
		  animate={{ height: 'auto' }}
		  transition={{ type: 'spring', duration: 2, delay: 1 }}
		  className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-w-[60vw] md:w-auto sm:w-full sm:max-w-[65vw] lg:w-full lg:max-w-[65vw] intro-div-bg ${yinYang ? '!hidden' : '!flex'} sm:flex-row flex-col `}>
			<motion.div className='my-info-details-div flex flex-col items-start sm:justify-evenly sm:w-1/2 sm:h-auto h-[400px] w-full lg:gap-3 sm:gap-1.5 text-white lg:p-8 md:p-6 sm:p-5 p-4 font-karla' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
				<h1 className='font-extrabold text-[calc(1.2em+1.5vw)] sm:text-[calc(2em+1.5vw)] md:text-[2.2rem] lg:text-[3rem] xl:text-[calc(2em+1.5vw)]'>Hi,</h1>
				<h3 className='font-semibold text-[calc(1em+1.5vw)] sm:text-[calc(1em+1.5vw)] md:text-[1.7rem] lg:text-[2rem] xl:text-[calc(1em+1.5vw)] lg:leading-9 leading-7 mb-2'>I'm Parth Padhiar</h3>
				<h6 className='font-extralight text-[calc(0.65em+1vw)] sm:text-[calc(0.5em+1vw)] md:text-[1rem] lg:text-[1.2rem] xl:text-[calc(1.4vw)] lg:leading-8 sm:leading-6 leading-5'>I design and code stunning websites that engage users and elevate your online presence.</h6>
			</motion.div>
			<motion.div className='relative flex sm:w-1/2 w-full transition-all duration-500 my-info-img-div' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
				<img src={img} alt='' className='absolute bottom-0 left-[50%] translate-x-[-50%] sm:w-full w-auto max-h-[250px] h-auto' />
			</motion.div>
		</Box>

		// <motion.div 
		//   className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-w-[60vw] flex intro-div-bg `} 
		//   initial={{ height: 0, opacity: 0 }} 
		//   animate={{ height: 'auto', opacity: 1 }}
		//   transition={{ type: 'spring', duration: 2, delay: 1 }}>
		// 	<motion.div className='flex flex-col items-start justify-evenly w-1/2  text-white p-[2rem] font-karla' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
		// 		<h1 className='font-extrabold text-[calc(2em+1.5vw)]'>Hi,</h1>
		// 		<h3 className='font-semibold text-[calc(1em+1.5vw)] mb-1'>I'm Parth Padhiar</h3>
		// 		<h6 className='font-extralight text-[calc(1.4vw)] leading-8'>I design and code stunning websites that engage users and elevate your online presence.</h6>
		// 	</motion.div>
		// 	<motion.div className='relative flex w-1/2 border transition-all duration-500' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
		// 		<img src={img} alt='' className='absolute bottom-0 left-[50%] translate-x-[-50%] w-full h-auto' />
		// 	</motion.div>
		// </motion.div>
	)
}

export default MyInfo