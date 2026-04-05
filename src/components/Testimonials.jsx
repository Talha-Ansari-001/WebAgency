import { motion } from 'framer-motion';
import { HiStar, HiUserCircle } from 'react-icons/hi';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      business: 'Restaurant Owner',
      result: 'Increased online orders by 30%',
      review: 'Got my website in 5 days and doubled my leads. The ordering system is so easy to use!',
      rating: 5,
    },
    {
      name: 'Priya Patel',
      business: 'Fitness Coach',
      result: 'Boosted sign-ups by 25%',
      review: 'WebAgency understood my brand perfectly. My clients love the new professional look of my site.',
      rating: 5,
    },
    {
      name: 'Amit Kumar',
      business: 'E-commerce Seller',
      result: 'Achieved 2x conversion rate',
      review: 'The optimized checkout flow they built has significantly increased our sales. Best investment ever.',
      rating: 5,
    },
  ];

  return (
    <div className='w-full py-24 bg-gray-50'>
      <div className='max-w-[1240px] mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-5xl font-bold text-slate-900 mb-4'>
            Client <span className='text-orange-accent'>Success Stories</span>
          </h2>
          <div className='w-20 h-1 bg-orange-accent mx-auto mb-6'></div>
          <p className='text-gray-600 max-w-2xl mx-auto text-lg'>
            Don't just take our word for it. Here's what our clients have achieved with our help.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className='p-8 rounded-[2.5rem] bg-white shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col h-full'
            >
              <div className='flex mb-6 text-orange-accent'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} size={24} />
                ))}
              </div>
              <p className='text-slate-700 italic mb-8 text-lg leading-relaxed flex-grow'>"{testimonial.review}"</p>
              
              <div className='flex items-center gap-4 mt-auto pt-6 border-t border-gray-50'>
                <HiUserCircle className='text-gray-300' size={48} />
                <div>
                  <h4 className='font-bold text-slate-900 text-lg leading-tight'>{testimonial.name}</h4>
                  <p className='text-orange-accent font-semibold text-sm mb-1'>{testimonial.business}</p>
                  <p className='text-gray-500 text-xs bg-slate-50 px-2 py-1 rounded inline-block font-bold uppercase tracking-wider'>{testimonial.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
