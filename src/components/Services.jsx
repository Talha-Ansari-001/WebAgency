import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { HiDesktopComputer, HiCode, HiShoppingCart, HiChip } from 'react-icons/hi';

const Services = () => {
  const services = [
    {
      title: 'Standard Website',
      description: 'Perfect for small businesses and personal portfolios who want to get online quickly.',
      benefits: ['Custom Design', 'Responsive Layout', 'Basic SEO', 'Fast Delivery'],
      icon: HiDesktopComputer,
    },
    {
      title: 'Premium Website',
      description: 'Advanced features and high-performance design for established businesses.',
      benefits: ['Custom UI/UX', 'CMS Integration', 'Advanced SEO', 'Analytics Setup'],
      icon: HiCode,
    },
    {
      title: 'E-commerce Website',
      description: 'Fully functional online store built to maximize sales and user conversion.',
      benefits: ['Payment Gateway', 'Inventory Management', 'Customer Accounts', 'Cart System'],
      icon: HiShoppingCart,
    },
    {
      title: 'Custom Web App',
      description: 'Tailored software solutions designed to solve your complex business challenges.',
      benefits: ['User Dashboards', 'API Integration', 'Secure Database', 'Scalable Backend'],
      icon: HiChip,
    },
  ];

  return (
    <div id='services' className='w-full py-24 bg-gray-50'>
      <div className='max-w-[1240px] mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <h2 className='text-3xl md:text-5xl font-bold text-slate-900 mb-4'>Our <span className='text-orange-accent'>Services</span></h2>
          <div className='w-20 h-1 bg-orange-accent mx-auto mb-6'></div>
          <p className='text-gray-600 max-w-2xl mx-auto text-lg'>
            We deliver results-driven web solutions to help your business dominate the digital landscape.
          </p>
        </motion.div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='h-full'
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
