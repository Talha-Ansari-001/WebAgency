import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div id='home' className='relative w-full min-h-screen flex items-center bg-[#0a0a0c] overflow-hidden'>
      {/* Abstract Background Elements */}
      <div className='absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none'></div>
      <div className='absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none'></div>

      <div className='max-w-[1240px] w-full mx-auto px-4 py-20 relative z-10'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='backdrop-blur-md bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-8 md:p-16 text-center shadow-2xl'
        >
          <motion.div 
            variants={itemVariants}
            className='inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8'
          >
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-orange-500'></span>
            </span>
            <span className='text-xs md:text-sm font-medium text-gray-300 tracking-wider uppercase'>
              Next-Gen SaaS Development Agency
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className='text-4xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight'
          >
            Engineering <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600'>Scalable SaaS</span> <br />
            For Explosive <span className='italic font-light'>Business Growth</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className='text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed'
          >
            Ash Core Technologies partners with founders to architect, build, and scale 
            high-performance digital products that dominate markets and delight users.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className='flex flex-col sm:flex-row items-center justify-center gap-5 mb-16'
          >
            <Link to='contact' smooth={true} duration={500} offset={-80}>
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: '#f97316' }}
                whileTap={{ scale: 0.98 }}
                className='w-full sm:w-auto bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors'
              >
                Start Your Project <HiArrowRight />
              </motion.button>
            </Link>
            <Link to='portfolio' smooth={true} duration={500} offset={-80}>
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.98 }}
                className='w-full sm:w-auto border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm transition-colors'
              >
                View Case Studies
              </motion.button>
            </Link>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/5'
          >
            {[
              { label: 'SaaS Architecture', desc: 'Enterprise-grade foundations' },
              { label: 'Rapid Scaling', desc: 'Built for millions of users' },
              { label: 'Product Strategy', desc: 'Data-driven growth cycles' }
            ].map((feature, i) => (
              <div key={i} className='flex flex-col items-center sm:items-start text-center sm:text-left'>
                <div className='flex items-center gap-2 text-orange-500 mb-1 font-bold'>
                  <HiCheckCircle size={18} />
                  <span>{feature.label}</span>
                </div>
                <p className='text-sm text-gray-500'>{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

