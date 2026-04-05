import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = ({ phoneNumber = 'your-number' }) => {
  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}`}
      target='_blank'
      rel='noopener noreferrer'
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className='fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors duration-300'
      aria-label='Chat on WhatsApp'
    >
      <FaWhatsapp size={32} />
    </motion.a>
  );
};

export default WhatsAppButton;
