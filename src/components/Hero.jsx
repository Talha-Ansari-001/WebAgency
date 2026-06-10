import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiArrowRight, HiOutlineLightningBolt, HiOutlineShoppingBag, HiOutlineCube } from 'react-icons/hi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    },
  };

  const pillars = [
    { 
      label: 'Conversion-Focused Web', 
      desc: 'Landing pages & brand sites',
      icon: HiOutlineLightningBolt 
    },
    { 
      label: 'E-Commerce Infrastructure', 
      desc: 'Secure digital storefronts',
      icon: HiOutlineShoppingBag 
    },
    { 
      label: 'Scalable SaaS Engine', 
      desc: 'Enterprise-grade foundations',
      icon: HiOutlineCube 
    }
  ];

  return (
    <div id='home' className='relative w-full min-h-screen flex items-center bg-[#0a0a0c] overflow-hidden pt-20 pb-10'>
      {/* Optimized Background Gradients */}
      <div className='absolute top-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-orange-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none'></div>
      <div className='absolute bottom-[-10%] left-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-orange-600/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none'></div>

      <div className='max-w-[1240px] w-full mx-auto px-4 relative z-10'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='backdrop-blur-xl bg-white/[0.01] border border-white/[0.05] rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-20 text-center shadow-2xl relative overflow-hidden'
        >
          {/* Subtle Grid Overlay */}
          <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

          <motion.div 
            variants={itemVariants}
            className='inline-flex items-center gap-2 bg-orange-500/5 border border-orange-500/20 px-5 py-2.5 rounded-full mb-10 relative z-10'
          >
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-orange-500'></span>
            </span>
            <span className='text-[10px] md:text-xs font-black text-orange-400 tracking-[0.15em] uppercase'>
              📍 No. 1 Web & SaaS Agency in Bhiwandi
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className='text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-8 relative z-10'
          >
            Building Premium <br className='hidden md:block' />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 italic'>Web Experiences</span> <br />
            <span className='text-xl md:text-3xl lg:text-4xl font-light text-gray-400 tracking-tight'>From Landing Pages To Scalable SaaS</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className='text-base md:text-xl text-gray-400 mb-14 max-w-4xl mx-auto leading-relaxed font-medium relative z-10 px-2'
          >
            Ash Core Technologies partners with founders and businesses to design, launch, and 
            scale high-performance digital solutions that dominate markets and accelerate revenue.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className='flex flex-col w-full gap-4 px-4 sm:flex-row sm:w-auto sm:px-0 items-center justify-center mb-20 relative z-10'
          >
            <Link to='contact' smooth={true} duration={500} offset={-80} className='w-full sm:w-auto'>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='w-full bg-orange-500 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-orange-500/20'
                aria-label="Start Your Project - Contact AshCore Technologies"
              >
                Start Your Project <HiArrowRight className='text-lg' aria-hidden="true" />
              </motion.button>
            </Link>
            <Link to='portfolio' smooth={true} duration={500} offset={-80} className='w-full sm:w-auto'>
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.98 }}
                className='w-full border-2 border-white/10 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest backdrop-blur-sm transition-all'
                aria-label="View Portfolio Case Studies"
              >
                View Case Studies
              </motion.button>
            </Link>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className='grid grid-cols-1 md:grid-cols-3 gap-10 pt-16 border-t border-white/5 relative z-10'
          >
            {pillars.map((pillar, i) => (
              <div key={i} className='flex flex-col items-center md:items-start text-center md:text-left group'>
                <div className='flex items-center gap-3 text-white mb-3 group-hover:text-orange-500 transition-colors duration-300'>
                  <div className='bg-white/5 p-2 rounded-xl border border-white/10 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all'>
                    <pillar.icon size={24} className='text-orange-500' aria-hidden="true" />
                  </div>
                  <span className='font-black text-sm uppercase tracking-wider'>{pillar.label}</span>
                </div>
                <p className='text-sm text-gray-500 font-medium pl-0 md:pl-12'>{pillar.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
