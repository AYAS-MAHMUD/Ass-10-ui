import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import LatestCard from "../Component/LatestCard";
import { motion } from 'framer-motion';
const MyServices = () => {
  const { user } = use(AuthContext);
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/services?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [user]);
  console.log(service);
  return (
    <div className='px-5 sm:px-10 md:px-30 '>
      <div className='border-b-4 border-blue-600 pb-4 my-15'>
            <motion.h1 initial={{ opacity: 0 ,y:40}} animate={{opacity:1, y:0}} transition={{ duration: 1 }} className=' text-center text-4xl font-bold'>My Services</motion.h1>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {service.map((i) => (
          <LatestCard key={i.id} i={i} />
        ))}
      </div>
    </div>
  );
};

export default MyServices;
