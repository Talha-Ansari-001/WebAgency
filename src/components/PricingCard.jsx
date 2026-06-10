import { motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi';
import { Link } from 'react-scroll';

const PricingCard = ({ title, price, description, features, highlighted, badge }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative p-8 md:p-10 rounded-[2.5rem] bg-white flex flex-col justify-between h-full transition-all duration-500 border-2 ${
        highlighted 
          ? 'border-orange-accent shadow-2xl shadow-orange-accent/15' 
          : 'border-slate-100 shadow-xl shadow-slate-200/50 hover:border-orange-accent/30'
      }`}
    >
      {/* Badge Section */}
      <div className='absolute -top-4 left-1/2 -translate-x-1/2 z-20 flex flex-col gap-2 items-center'>
        {highlighted && (
          <div className='bg-gradient-to-r from-orange-accent to-orange-hover text-white px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-xl shadow-orange-accent/40 whitespace-nowrap border-2 border-white'>
            Most Popular Choice
          </div>
        )}
      </div>
      
      {/* Header & Pricing */}
      <div className='w-full'>
        <div className='mb-8 text-center pt-2'>
          {/* Badge Container for Symmetry */}
          <div className='min-h-[32px] flex items-center justify-center mb-4'>
            {badge && (
              <span className='bg-orange-accent/5 text-orange-accent text-[8px] md:text-[9px] font-black uppercase tracking-widest py-1.5 px-4 rounded-full border border-orange-accent/15'>
                {badge}
              </span>
            )}
          </div>
          
          <h3 className='text-xl md:text-2xl font-black text-slate-900 mb-3 tracking-tight'>{title}</h3>
          <p className='text-slate-500 text-[13px] md:text-sm mb-8 min-h-[48px] flex items-center justify-center leading-relaxed font-medium px-2'>
            {description}
          </p>
          
          <div className='flex flex-col items-center justify-center bg-slate-50/50 py-8 rounded-3xl border border-slate-100/50 min-h-[160px] md:min-h-[180px]'>
            <div className='flex items-baseline gap-1 mb-1'>
              <span className='text-3xl md:text-5xl font-black text-slate-900 tracking-tighter'>{price}</span>
            </div>
            <span className='text-orange-accent font-black text-[9px] md:text-[10px] uppercase tracking-widest'>One-Time Dev Fee</span>
            
            <div className='mt-4 pt-4 border-t border-slate-200/60 w-3/4'>
              {price !== 'Custom' ? (
                <>
                  <p className='text-[10px] md:text-[11px] text-slate-400 font-bold'>Annual Renewal: ₹4,000 - ₹8,000</p>
                  <p className='text-[8px] md:text-[9px] text-slate-400 italic mt-0.5'>(Hosting, SSL & Domain Management)</p>
                </>
              ) : (
                <>
                  <p className='text-[10px] md:text-[11px] text-slate-400 font-bold'>Annual Maintenance</p>
                  <p className='text-[8px] md:text-[9px] text-slate-400 italic mt-0.5'>(Based on Technical Complexity)</p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Feature List Section with Minimum Height for Baseline Consistency */}
        <div className='min-h-[300px] md:min-h-[340px] flex flex-col mb-8'>
          <ul className='space-y-4' aria-label={`Features of ${title} Plan`}>
            {features.map((feature, index) => (
              <li key={index} className='flex items-start gap-3 text-slate-700 group'>
                <div className='bg-orange-accent/10 p-1 rounded-full flex-shrink-0 mt-0.5 group-hover:bg-orange-accent/20 transition-colors'>
                  <HiCheck className='text-orange-accent' size={14} aria-hidden="true" />
                </div>
                <span className='text-[13px] md:text-[14px] font-bold leading-tight group-hover:text-slate-900 transition-colors'>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Baseline Anchor Button */}
      <div className='w-full'>
        <Link to='contact' smooth={true} duration={500} offset={-80}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 md:py-5 rounded-2xl font-black text-[12px] md:text-sm uppercase tracking-widest transition-all duration-300 shadow-lg ${
              highlighted
                ? 'bg-gradient-to-r from-orange-accent to-orange-hover text-white shadow-orange-accent/30'
                : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20'
            }`}
            aria-label={`${price === 'Custom' ? 'Get a Custom Quote' : 'Start Your Project'} with the ${title} Plan`}
          >
            {price === 'Custom' ? 'Get a Custom Quote' : 'Start Your Project'}
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default PricingCard;
