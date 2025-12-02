import { Star } from 'lucide-react';
import React from 'react'
import { motion } from 'framer-motion';

const Testimonial = () => {
    const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    service: 'Electrical Installation',
    rating: 5,
    text: 'Excellent service! The electrician was professional and finished the job quickly. Highly recommend HomeHero!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  },
  {
    id: '2',
    name: 'Michael Chen',
    service: 'Pipe Repair',
    rating: 5,
    text: 'Fixed my leaking pipe the same day I called. Great pricing and even better service.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
  },
  {
    id: '3',
    name: 'Emma Williams',
    service: 'House Cleaning',
    rating: 5,
    text: 'My house has never looked cleaner! The team was thorough, respectful, and on time. Worth every penny!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
  }
];
  return (
    <motion.div initial={{ opacity: 0 ,y:-40}} whileInView={{opacity:1, y:0}} transition={{ duration: 1 }} className='px-5 sm:px-10 md:px-40 mx-auto my-20'>

      {/* Customer Testimonials */}
      <section className="md:py-0">
          <div className="text-center mb-12">
            <motion.h2 initial={{ opacity: 0 ,x:40}} whileInView={{opacity:1, x:0}} transition={{ duration: 1 }} className="text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </motion.h2>
            <motion.p initial={{ opacity: 0 ,x:-40}} whileInView={{opacity:1, x:0}} transition={{ duration: 1 }} className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read reviews from thousands of satisfied customers
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>

                {/* User Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

      </section>
    </motion.div>
  )
}

export default Testimonial