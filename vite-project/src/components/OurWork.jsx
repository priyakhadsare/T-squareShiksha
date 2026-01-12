import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const OurWork = () => {
    const workData = [
       {
        title:'Placement Assistance',
        description: 'We turn bold ideas into powerful digital solutions that connect,engage...',
        image: assets.work_mobile_app
        

       },
       {
        title:'Addmission Process And Guidance',
        description: 'we help you execute your plan and deliver results.',
        image: assets.work_dashboard_management
       },
       {
        title:'Courses, Document Verification & support',
        description: 'We help you create a marketing strategy that drives results.',
        image: assets.work_fitness_app
       },
    ]
  return (
    <motion.div 
    initial ="hidden"
    whileInView="visible"
    viewport={{once: true}}
    transition={{ staggerChildren: 0.2}}
    
    id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <Title  title='Why Students trust our Consultancy' desc ='From statergy to Execution, we craft digital solutions that move your career forward.' />

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl items-start'>
        {
            workData.map((work, index)=>(
                <motion.div 
                initial ={{ opacity: 0, y:30 }}
                whileInView={{ opacity:1, y: 0}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once : true }}
                key={index} className='flex flex-col h-full hover:scale-105 duration-500 transition-all cursor-pointer'>
                    <div className='w-full overflow-hidden rounded-xl shrink-0 h-64'>
                        <img src={work.image} className='w-full h-full object-cover rounded-xl' alt={work.title} />
                    </div>
                    <div className='flex flex-col grow mt-3'>
                        <h3 className='mb-2 text-lg font-semibold text-gray-800 dark:text-white'>{work.title}</h3>
                        <p className='text-sm opacity-60 dark:opacity-70 text-gray-600 dark:text-gray-400 grow'> {work.description}</p>
                    </div>
                </motion.div>
            ))
        }

      </div>
      
      
    </motion.div>
  )
}

export default OurWork
