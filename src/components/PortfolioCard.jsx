import { motion } from 'framer-motion';

const PortfolioCard = ({ image, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      className='bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300'
    >
      <div className='relative h-48 overflow-hidden'>
        <img src={image} alt={title} className='w-full h-full object-cover transition-transform duration-500 hover:scale-110' />
      </div>
      <div className='p-6'>
        <h3 className='text-xl font-bold text-slate-900 mb-2'>{title}</h3>
        <p className='text-gray-600'>{description}</p>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
