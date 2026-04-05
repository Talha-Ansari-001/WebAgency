import { motion } from 'framer-motion';
import BenefitCard from './BenefitCard';
import { HiTrendingUp, HiGlobeAlt, HiCurrencyDollar, HiDeviceMobile } from 'react-icons/hi';

const Benefits = () => {
  const benefits = [
    {
      title: 'More Customers',
      description: 'Our high-converting designs are built to turn casual visitors into paying customers.',
      icon: HiTrendingUp,
    },
    {
      title: 'Better Online Presence',
      description: 'Stand out from the competition with a professional, modern website that reflects your brand.',
      icon: HiGlobeAlt,
    },
    {
      title: 'Increased Sales',
      description: 'Optimized user journeys and clear calls-to-action drive more sales for your business.',
      icon: HiCurrencyDollar,
    },
    {
      title: 'Mobile-friendly',
      description: 'Your website will look and work perfectly on all devices, from smartphones to desktops.',
      icon: HiDeviceMobile,
    },
  ];

  return (
    <div className='w-full py-24 bg-white'>
      <div className='max-w-[1240px] mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-5xl font-bold text-slate-900 mb-4'>
            What <span className='text-orange-accent'>You Get</span>
          </h2>
          <div className='w-20 h-1 bg-orange-accent mx-auto mb-6'></div>
          <p className='text-gray-600 max-w-2xl mx-auto text-lg'>
            We don't just build websites; we build growth engines for your business.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
