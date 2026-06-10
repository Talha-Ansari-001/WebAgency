import { motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi';
import { Link } from 'react-scroll';

const PricingCard = ({ title, price, description, features, highlighted, badge }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`relative p-10 rounded-[2.5rem] bg-white flex flex-col h-full transition-all duration-500 border-2 ${
        highlighted 
          ? 'border-orange-accent shadow-2xl shadow-orange-accent/15' 
          : 'border-slate-100 shadow-xl shadow-slate-200/50 hover:border-orange-accent/30'
      }`}
    >
      {highlighted && (
        <div className='absolute -top-5 left-1/2 -translate-x-1/2 z-20'>
          <div className='bg-gradient-to-r from-orange-accent to-orange-hover text-white px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-orange-accent/40 whitespace-nowrap border-2 border-white'>
            Most Popular Choice
          </div>
        </div>
      )}

      {badge && (
        <div className='absolute top-6 right-6'>
          <span className='bg-slate-100 text-slate-600 text-[9px] font-black uppercase tracking-wider py-1 px-3 rounded-full border border-slate-200'>
            {badge}
          </span>
        </div>
      )}
      
      <div className='mb-10 text-center'>
        <h3 className='text-2xl font-black text-slate-900 mb-3 tracking-tight'>{title}</h3>
        <p className='text-slate-500 text-sm mb-8 min-h-[48px] leading-relaxed font-medium'>{description}</p>
        
        <div className='flex flex-col items-center justify-center bg-slate-50/50 py-6 rounded-3xl border border-slate-100/50'>
          <div className='flex items-baseline gap-1 mb-1'>
            <span className='text-4xl md:text-5xl font-black text-slate-900 tracking-tighter'>{price}</span>
          </div>
          <span className='text-orange-accent font-black text-[10px] uppercase tracking-widest'>One-Time Dev Fee</span>
          
          {price !== 'Custom' && (
            <div className='mt-4 pt-4 border-t border-slate-200/60 w-3/4'>
              <p className='text-[11px] text-slate-400 font-bold'>Annual Renewal: ₹4,000 - ₹8,000</p>
              <p className='text-[9px] text-slate-400 italic mt-0.5'>(Hosting, SSL & Domain Management)</p>
            </div>
          )}
        </div>
      </div>

      <ul className='mb-10 space-y-4 flex-grow'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-start text-slate-700 group'>
            <div className='bg-orange-accent/10 p-1 rounded-full mr-3 mt-0.5 group-hover:bg-orange-accent/20 transition-colors'>
              <HiCheck className='text-orange-accent flex-shrink-0' size={14} />
            </div>
            <span className='text-[14px] font-bold leading-tight group-hover:text-slate-900 transition-colors'>{feature}</span>
          </li>
        ))}
      </ul>

      <Link to='contact' smooth={true} duration={500} offset={-80}>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-lg ${
            highlighted
              ? 'bg-gradient-to-r from-orange-accent to-orange-hover text-white shadow-orange-accent/30'
              : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20'
          }`}
        >
          {price === 'Custom' ? 'Get a Custom Quote' : 'Start Your Project'}
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default PricingCard;
