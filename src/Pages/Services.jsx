import React, { useEffect, useState } from 'react'
import LatestCard from '../Component/LatestCard'
import { motion } from 'framer-motion';

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/Services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    // console.log(services)
  return (
    <div className='px-5 sm:px-10 md:px-30 '>
        <div className='border-b-4 border-blue-600 pb-4 my-15'>
            <motion.h1 initial={{ opacity: 0 ,y:40}} animate={{opacity:1, y:0}} transition={{ duration: 1 }} className=' text-center text-4xl font-bold'>All Services</motion.h1>
        </div>
        {/* filter data by price */}
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {
                services.map(i => (
                    
                    <LatestCard key={i.id} i={i}/>
                ))
            }
        </div>
    </div>
  )
}

export default Services