import React from 'react'
import { motion } from 'framer-motion';
const WhyChoiceUs = () => {
    const whyChoose = [
  {
    id: '1',
    title: 'Verified Professionals',
    description: 'All service providers are thoroughly vetted and certified',
    icon: '✓'
  },
  {
    id: '2',
    title: 'Instant Booking',
    description: 'Book services instantly and get real-time updates',
    icon: '⚡'
  },
  {
    id: '3',
    title: 'Transparent Pricing',
    description: 'No hidden charges, all prices are upfront and clear',
    icon: '💰'
  },
  {
    id: '4',
    title: '24/7 Support',
    description: 'Our customer support team is always available',
    icon: '📞'
  },
  {
    id: '5',
    title: 'Money-Back Guarantee',
    description: 'Not satisfied? Get 100% refund guarantee',
    icon: '🛡️'
  },
  {
    id: '6',
    title: 'Quick Response',
    description: 'Professionals respond within 2 hours',
    icon: '⏱️'
  }
];
// console.log(whyChoose)
  return (
    <motion.div initial={{ opacity: 0 ,x:40}} whileInView={{opacity:1, x:0}} transition={{ duration: 1 }} className='px-5 sm:px-10 md:px-40  my-10'>
              {/* Why Choose Us */}
      <section className="py-16 md:py-24">

          <div className="text-center mb-12">
            <motion.h2 initial={{ opacity: 0 ,x:40}} whileInView={{opacity:1, x:0}} transition={{ duration: 1 }} className="text-2xl md:text-4xl font-bold mb-4">
              Why Choose HomeHero?
            </motion.h2>
            <motion.p initial={{ opacity: 0 ,x:-40}} whileInView={{opacity:1, x:0}} transition={{ duration: 1 }} className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to connecting you with trusted professionals
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

      </section>
    </motion.div>
  )
}

export default WhyChoiceUs