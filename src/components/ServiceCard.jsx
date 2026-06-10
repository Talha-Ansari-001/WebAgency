import { motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi';

const ServiceCard = ({ title, description, benefits, icon: Icon, highlighted }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`p-10 rounded-[2.5rem] bg-white border-2 transition-all duration-500 flex flex-col h-full relative overflow-hidden ${
        highlighted 
          ? 'border-orange-accent shadow-2xl shadow-orange-accent/10' 
          : 'border-slate-100 shadow-xl shadow-slate-200/50 hover:border-orange-accent/30'
      }`}
    >
      {highlighted && (
        <div className='absolute top-0 right-0'>
          <div className='bg-orange-accent text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-6 rounded-bl-2xl'>
            Recommended
          </div>
        </div>
      )}

      {Icon && (
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 ${
          highlighted ? 'bg-orange-accent text-white' : 'bg-orange-50 text-orange-accent'
        }`}>
          <Icon size={32} />
        </div>
      )}
      <h3 className='text-2xl font-black mb-4 text-slate-900 leading-tight'>{title}</h3>
      <p className='text-gray-500 mb-10 flex-grow leading-relaxed font-medium text-[15px]'>{description}</p>
      
      <div className='w-full pt-8 border-t border-slate-100'>
        <ul className='space-y-4 text-left'>
          {benefits.map((benefit, index) => (
            <li key={index} className='flex items-start text-slate-700 group'>
              <div className='bg-orange-accent/10 p-1 rounded-full mr-3 flex-shrink-0 mt-0.5 group-hover:bg-orange-accent/20 transition-colors'>
                <HiCheck className='text-orange-accent' size={14} />
              </div>
              <span className='text-sm font-bold leading-tight'>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
