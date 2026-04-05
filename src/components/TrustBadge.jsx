import { motion } from 'framer-motion';

const TrustBadge = ({ icon: Icon, text }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-gray-100'
    >
      {Icon && <Icon className='text-orange-accent' size={20} />}
      <span className='font-semibold text-slate-800 whitespace-nowrap'>{text}</span>
    </motion.div>
  );
};

export default TrustBadge;
