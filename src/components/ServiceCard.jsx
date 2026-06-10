import { motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi';

const ServiceCard = ({ title, description, benefits, icon: Icon, highlighted }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`p-8 md:p-10 rounded-[2.5rem] bg-white border-2 transition-all duration-500 flex flex-col justify-between h-full relative overflow-hidden ${
        highlighted 
          ? 'border-orange-accent shadow-2xl shadow-orange-accent/10' 
          : 'border-slate-100 shadow-xl shadow-slate-200/50 hover:border-orange-accent/30'
      }`}
    >
      {highlighted && (
        <div className='absolute top-0 right-0'>
          <div className='bg-orange-accent text-white text-[9px] font-black uppercase tracking-widest py-1.5 px-5 rounded-bl-2xl'>
            Recommended
          </div>
        </div>
      )}

      <div className='w-full'>
        {Icon && (
          <div 
            className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-105 ${
              highlighted ? 'bg-orange-accent text-white' : 'bg-orange-50 text-orange-accent'
            }`}
            aria-hidden="true"
          >
            <Icon size={28} />
          </div>
        )}
        <h3 className='text-lg md:text-2xl font-black mb-4 text-slate-900 leading-tight min-h-[56px] md:min-h-[64px] flex items-center justify-center text-center'>{title}</h3>
        <p className='text-gray-500 mb-10 leading-relaxed font-medium text-[13px] md:text-[15px] min-h-[64px] md:min-h-[72px] flex items-center justify-center text-center px-2'>{description}</p>
        
        <div className='w-full pt-8 border-t border-slate-100'>
          <ul className='space-y-4 text-left' aria-label={`Benefits of ${title}`}>
            {benefits.map((benefit, index) => (
              <li key={index} className='flex items-start gap-3 text-slate-700 group'>
                <div className='bg-orange-accent/10 p-1 rounded-full flex-shrink-0 mt-0.5 group-hover:bg-orange-accent/20 transition-colors'>
                  <HiCheck className='text-orange-accent' size={14} aria-hidden="true" />
                </div>
                <span className='text-[12px] md:text-sm font-bold leading-tight'>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
