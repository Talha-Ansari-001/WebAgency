import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiCheckCircle } from 'react-icons/hi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div id='home' className='w-full min-h-screen pt-20 flex items-center bg-gradient-to-b from-orange-50/50 to-white'>
      <div className='max-w-[1240px] w-full mx-auto px-4 py-16 flex flex-col justify-center items-center text-center'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='max-w-4xl'
        >
          <motion.p 
            variants={itemVariants}
            className='uppercase text-sm tracking-[0.2em] text-orange-accent font-bold mb-6'
          >
            Award-Winning Web Development Agency
          </motion.p>
          
          <motion.h1 
            variants={itemVariants}
            className='text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8'
          >
            We Help Businesses Get <br />
            <span className='bg-gradient-to-r from-orange-accent to-orange-hover bg-clip-text text-transparent'>
              More Customers Online
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className='text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed'
          >
            Get a high-converting website in <span className='font-bold text-slate-900 underline decoration-orange-accent'>5–7 days</span>. 
            We build digital experiences that turn visitors into loyal customers.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className='flex flex-col sm:flex-row items-center justify-center gap-6 mb-12'
          >
            <Link to='contact' smooth={true} duration={500} offset={-80}>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(255, 107, 0, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className='bg-gradient-to-r from-orange-accent to-orange-hover text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-orange-accent/20 transition-all duration-300'
              >
                Get Your Website Today
              </motion.button>
            </Link>
            <Link to='portfolio' smooth={true} duration={500} offset={-80}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='border-2 border-slate-900 text-slate-900 px-10 py-4 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-300 font-bold text-lg'
              >
                View Our Work
              </motion.button>
            </Link>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className='flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-gray-600 font-medium border-t border-gray-100 pt-8'
          >
            <div className='flex items-center gap-2'>
              <HiCheckCircle className='text-green-500' size={20} />
              <span>No hidden charges</span>
            </div>
            <div className='flex items-center gap-2'>
              <HiCheckCircle className='text-green-500' size={20} />
              <span>Fast delivery</span>
            </div>
            <div className='flex items-center gap-2'>
              <HiCheckCircle className='text-green-500' size={20} />
              <span>Free consultation</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
