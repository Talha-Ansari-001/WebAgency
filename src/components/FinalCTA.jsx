import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const FinalCTA = () => {
  return (
    <div className='w-full py-24 bg-white px-4'>
      <div className='max-w-[1240px] mx-auto'>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='bg-gradient-to-r from-orange-accent to-orange-hover rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-orange-accent/30 overflow-hidden relative'
        >
          {/* Decorative circles */}
          <div className='absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl'></div>
          <div className='absolute -bottom-24 -right-24 w-64 h-64 bg-black/10 rounded-full blur-3xl'></div>
          
          <div className='relative z-10'>
            <h2 className='text-4xl md:text-6xl font-black mb-8 leading-tight'>
              Ready to Grow Your <br className='hidden md:block' /> Business Online?
            </h2>
            <p className='text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-medium'>
              Don't wait. Get your high-converting website in just 5–7 days and start getting more customers today.
            </p>
            <Link to='contact' smooth={true} duration={500} offset={-80}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                className='bg-white text-orange-accent px-12 py-5 rounded-full font-black text-xl shadow-xl transition-all duration-300'
              >
                Get Your Website Today
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FinalCTA;
