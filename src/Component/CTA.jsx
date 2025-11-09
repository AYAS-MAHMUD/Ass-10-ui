import React from 'react'
import { Link } from 'react-router'
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <div>
      <section className="py-16 md:py-24 bg-blue-600">
          <div className="text-center text-white">
            <motion.h2 initial={{ opacity: 0 ,y:40}} whileInView={{opacity:1, y:0}} transition={{ duration: 1 }} className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Service?
            </motion.h2>
            <motion.p initial={{ opacity: 0 ,x:-40}} whileInView={{opacity:1, x:0}} transition={{ duration: 1 }} className="text-lg mb-8 opacity-90">
              Book a trusted professional today and get your issues resolved
            </motion.p>
            <Link  to="/services" className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
              Explore Services Now
            </Link>
          </div>
      </section>
    </div>
  )
}

export default CTA