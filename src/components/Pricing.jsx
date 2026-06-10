import { motion } from 'framer-motion';
import PricingCard from './PricingCard';
import { HiCheckCircle } from 'react-icons/hi';

const Pricing = () => {
  const plans = [
    {
      title: 'Static Website & Landing Pages',
      price: '₹14,999',
      description: 'Perfect for single-page event launches and high-performance splash pages.',
      features: [
        '1 Year Free Hosting & Domain',
        'SSL Certificate Included',
        'WhatsApp Integration',
        '1 Revision Included',
        'Mobile-First Config',
        'Basic SEO Setup',
      ],
      highlighted: false,
    },
    {
      title: 'Standard Dynamic Website',
      price: '₹19,999',
      description: 'Ideal for small businesses needing a professional 5-page brand presence.',
      features: [
        'Up to 5 Pages',
        'Free Domain + Hosting (1 Year)',
        'SSL Certificate Included',
        'Interactive Contact Forms',
        'Standard SEO Config',
        '2 Revisions Included',
      ],
      highlighted: false,
    },
    {
      title: 'Premium Dynamic Website',
      price: '₹24,999',
      description: 'Most popular choice for growing businesses needing full CMS control.',
      features: [
        'Up to 10 Dynamic Pages',
        'Full CMS Access (Client-Editable)',
        'Advanced UI/UX Detailing',
        'Google Analytics Integration',
        'Advanced SEO Setup',
        '2 Revisions Included',
      ],
      highlighted: true,
    },
    {
      title: 'E-commerce Website',
      price: '₹49,999',
      description: 'Fully functional storefront designed to maximize online sales.',
      features: [
        'Catalog Setup (Max 50 Products)',
        'Secure Payment Gateways',
        'Cart + Checkout System',
        'Inventory Management',
        'Admin Dashboard',
        '3 Revisions Included',
      ],
      highlighted: false,
      badge: 'Max 50 Products Initially',
    },
    {
      title: 'Custom Web Apps & SaaS',
      price: 'Custom',
      description: 'Bespoke software solutions tailored for unique business challenges.',
      features: [
        'Bespoke Architecture',
        'User Auth System',
        'Role-Based Dashboards',
        'API & Tool Integrations',
        'Scalable Backend Infra',
        'Dedicated Project Support',
      ],
      highlighted: false,
    },
  ];

  return (
    <div id='pricing' className='w-full py-32 bg-slate-50 relative overflow-hidden'>
      {/* Decorative Background Grid */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]'></div>

      <div className='max-w-[1400px] mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-24'
        >
          <span className='text-orange-accent font-black tracking-[0.4em] uppercase text-sm mb-4 block'>Transparent Pricing</span>
          <h2 className='text-4xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter'>
            Invest in Your <span className='text-orange-accent italic'>Success</span>
          </h2>
          <div className='w-24 h-1.5 bg-gradient-to-r from-orange-accent to-orange-hover mx-auto mb-8 rounded-full'></div>
          <p className='text-slate-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed'>
            Simple, honest pricing with no hidden monthly platform fees. Only high-performance results.
          </p>
        </motion.div>

        {/* 3+2 Flexible Grid */}
        <div className='flex flex-wrap justify-center gap-8 mb-24'>
          {/* Top Row: 3 Items on Desktop */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1240px]'>
            {plans.slice(0, 3).map((plan, index) => (
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

          {/* Bottom Row: 2 Centered Items on Desktop */}
          <div className='grid md:grid-cols-2 gap-8 w-full max-w-[820px]'>
            {plans.slice(3, 5).map((plan, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                viewport={{ once: true }}
              >
                <PricingCard {...plan} />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='flex flex-wrap justify-center gap-x-12 gap-y-8 bg-white p-12 rounded-[3rem] border border-slate-200 shadow-2xl shadow-slate-200/50 max-w-4xl mx-auto'
        >
          <div className='flex items-center gap-4 group'>
            <div className='bg-orange-accent/10 p-3 rounded-2xl group-hover:scale-110 transition-transform'>
              <HiCheckCircle className='text-orange-accent' size={32} />
            </div>
            <div>
              <p className='font-black text-slate-900 text-lg uppercase tracking-tight'>One-Time Payment</p>
              <p className='text-slate-500 font-medium'>Zero Monthly Platform Fees</p>
            </div>
          </div>
          <div className='hidden md:block w-px h-16 bg-slate-200' />
          <div className='flex items-center gap-4 group'>
            <div className='bg-orange-accent/10 p-3 rounded-2xl group-hover:scale-110 transition-transform'>
              <HiCheckCircle className='text-orange-accent' size={32} />
            </div>
            <div>
              <p className='font-black text-slate-900 text-lg uppercase tracking-tight'>100% Satisfaction</p>
              <p className='text-slate-500 font-medium'>Results-Driven Delivery</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
