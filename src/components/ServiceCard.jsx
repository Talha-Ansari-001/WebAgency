import { motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi';

const ServiceCard = ({ title, description, benefits, icon: Icon }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className='p-8 shadow-xl rounded-[2.5rem] bg-white border border-gray-100 hover:border-orange-accent/50 transition-all duration-300 flex flex-col h-full text-center items-center'
    >
      {Icon && (
        <div className='bg-orange-50 p-4 rounded-2xl text-orange-accent mb-6 group-hover:bg-orange-accent group-hover:text-white transition-all duration-300'>
          <Icon size={32} />
        </div>
      )}
      <h3 className='text-2xl font-bold mb-4 text-slate-900'>{title}</h3>
      <p className='text-gray-600 mb-8 flex-grow leading-relaxed'>{description}</p>
      
      <div className='w-full pt-6 border-t border-gray-50'>
        <ul className='space-y-4 text-left'>
          {benefits.map((benefit, index) => (
            <li key={index} className='flex items-center text-slate-700 font-medium'>
              <div className='bg-green-100 p-1 rounded-full mr-3 flex-shrink-0'>
                <HiCheck className='text-green-600' size={14} />
              </div>
              <span className='text-sm'>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
