import { motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi';
import { Link } from 'react-scroll';

const PricingCard = ({ title, price, description, features, highlighted }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`relative p-8 rounded-3xl shadow-xl bg-white flex flex-col h-full transition-all duration-300 border-2 ${
        highlighted ? 'border-orange-accent shadow-orange-accent/10' : 'border-gray-100 shadow-gray-200'
      }`}
    >
      {highlighted && (
        <div className='absolute -top-5 left-1/2 -translate-x-1/2 z-20'>
          <div className='bg-gradient-to-r from-orange-accent to-orange-hover text-white px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-orange-accent/40 whitespace-nowrap border-2 border-white'>
            Most Popular Choice
          </div>
        </div>
      )}
      
      <div className='mb-8 text-center'>
        <h3 className='text-2xl font-bold text-slate-900 mb-2'>{title}</h3>
        <p className='text-gray-500 text-sm mb-6 min-h-[40px] leading-relaxed'>{description}</p>
        <div className='flex items-center justify-center gap-1'>
          <span className='text-4xl font-black text-slate-900'>{price}</span>
          {price !== 'Custom' && <span className='text-gray-400 font-medium'>/year</span>}
        </div>
      </div>

      <div className='w-full h-px bg-gray-100 mb-8' />

      <ul className='mb-10 space-y-4 flex-grow'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-start text-slate-700'>
            <div className='bg-orange-accent/10 p-1 rounded-full mr-3 mt-0.5'>
              <HiCheck className='text-orange-accent flex-shrink-0' size={14} />
            </div>
            <span className='text-[15px] font-medium leading-tight'>{feature}</span>
          </li>
        ))}
      </ul>

      <Link to='contact' smooth={true} duration={500} offset={-80}>
        <motion.button
          whileHover={{ scale: 1.02, boxShadow: highlighted ? '0 20px 25px -5px rgba(255, 107, 0, 0.4)' : '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-md ${
            highlighted
              ? 'bg-gradient-to-r from-orange-accent to-orange-hover text-white'
              : 'bg-slate-900 text-white hover:bg-slate-800'
          }`}
        >
          {price === 'Custom' ? 'Get a Quote' : 'Select Plan'}
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default PricingCard;
