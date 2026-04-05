import { motion } from 'framer-motion';
import TrustBadge from './TrustBadge';
import { HiFire, HiLightningBolt, HiChat } from 'react-icons/hi';

const TrustBadgesRow = () => {
  const badges = [
    { text: '50+ Websites Delivered', icon: HiFire },
    { text: 'Fast Delivery', icon: HiLightningBolt },
    { text: '1 Year Support Included', icon: HiChat },
  ];

  return (
    <div className='w-full py-12 bg-white flex justify-center'>
      <div className='max-w-[1240px] px-4 w-full'>
        <div className='flex flex-wrap justify-center gap-6'>
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TrustBadge {...badge} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadgesRow;
