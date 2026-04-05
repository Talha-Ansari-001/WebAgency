import { motion } from 'framer-motion';
import PricingCard from './PricingCard';
import { HiCheckCircle } from 'react-icons/hi';

const Pricing = () => {
  const plans = [
    {
      title: 'Standard',
      price: '₹14,999',
      description: 'Best for small businesses looking for a professional presence.',
      features: [
        '5 Pages',
        'Free Domain + Hosting (1 Year)',
        'SSL Included',
        'WhatsApp Integration',
        'SEO Friendly',
        '1 Revision',
      ],
      highlighted: false,
    },
    {
      title: 'Premium',
      price: '₹24,999',
      description: 'Most popular choice for growing businesses needing advanced UI.',
      features: [
        '10 Pages',
        'Advanced UI/UX Design',
        'Free Domain + Hosting',
        'Unlimited Media Upload',
        'SEO Optimized',
        '2 Revisions',
      ],
      highlighted: true,
    },
    {
      title: 'Ecommerce',
      price: '₹49,999',
      description: 'Perfect for online stores and businesses selling products.',
      features: [
        '50 Products',
        'Payment Gateway Integration',
        'Cart + Checkout System',
        'Admin Dashboard',
        'Shipping Integration',
        '3 Revisions',
      ],
      highlighted: false,
    },
    {
      title: 'Custom',
      price: 'Custom',
      description: 'Built for unique needs and complex functionalities.',
      features: [
        'Custom Web App Features',
        'User Auth System',
        'API Integrations',
        'Scalable Architecture',
        'Dedicated Support',
        'Regular Updates',
      ],
      highlighted: false,
    },
  ];

  return (
    <div id='pricing' className='w-full py-24 bg-white'>
      <div className='max-w-[1240px] mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-5xl font-bold text-slate-900 mb-4'>
            Simple <span className='text-orange-accent'>Pricing</span>
          </h2>
          <div className='w-20 h-1 bg-orange-accent mx-auto mb-6'></div>
          <p className='text-gray-600 max-w-2xl mx-auto text-lg'>
            Choose the perfect plan for your business needs. No hidden costs, just transparent results.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mt-12 mb-20'>
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='flex flex-wrap justify-center gap-x-12 gap-y-6 bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100'
        >
          <div className='flex items-center gap-3 group'>
            <HiCheckCircle className='text-orange-accent transition-transform group-hover:scale-125' size={32} />
            <div>
              <p className='font-bold text-slate-900 text-lg'>One-Time Payment</p>
              <p className='text-slate-500'>No Monthly Fees</p>
            </div>
          </div>
          <div className='hidden md:block w-px h-12 bg-gray-200' />
          <div className='flex items-center gap-3 group'>
            <HiCheckCircle className='text-orange-accent transition-transform group-hover:scale-125' size={32} />
            <div>
              <p className='font-bold text-slate-900 text-lg'>100% Satisfaction</p>
              <p className='text-slate-500'>Guarantee</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
