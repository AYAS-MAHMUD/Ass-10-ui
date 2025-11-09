import React, { use } from 'react'
import LatestCard from './LatestCard'
import { Link } from 'react-router'
import { motion } from 'framer-motion';
const Latest = ({latestData}) => {
    const data = use(latestData)
    console.log(data)
  return (
    <div className='px-30 mx-auto'>
        <div className="text-center mb-12">
            <motion.h2 initial={{ opacity: 0 ,x:40}} whileInView={{opacity:1, x:0}} transition={{ duration: 1 }} className="text-3xl md:text-4xl font-bold  mb-4">
              Top Rated Services
            </motion.h2>
            <motion.p initial={{ opacity: 0 ,x:-40}} whileInView={{opacity:1, x:0}} transition={{ duration: 1 }} className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our selection of highly-rated service providers in your area
            </motion.p>
        </div>
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    data.map(i=><LatestCard key={i.id}  i={i}/>)
                }
            </div>
            <div className='text-center my-15'>
                <Link to='/services' className='btn bg-blue-600 text-white px-10 py-6'>View All Services</Link>
            </div>
        </div>
    </div>
  )
}

export default Latest