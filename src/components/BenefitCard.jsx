import { motion } from 'framer-motion';

const BenefitCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center'
    >
      <div className='bg-orange-50 p-4 rounded-full mb-6'>
        <Icon size={40} className='text-orange-accent' />
      </div>
      <h3 className='text-xl font-bold text-slate-900 mb-3'>{title}</h3>
      <p className='text-gray-600 leading-relaxed'>{description}</p>
    </motion.div>
  );
};

export default BenefitCard;
