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
        'Single-Page Layout Design',
        'Free Domain + Hosting (1 Year)',
        'SSL Certificate Included',
        'WhatsApp Integration',
        'Mobile-First Configuration',
        'Standard SEO Setup',
        '1 Revision Included',
      ],
      highlighted: false,
    },
    {
      title: 'Standard Dynamic Website',
      price: '₹19,999',
      description: 'Ideal for small businesses needing a professional 5-page brand presence.',
      features: [
        'Up to 5 Dynamic Pages',
        'Free Domain + Hosting (1 Year)',
        'SSL Certificate Included',
        'Interactive Contact Forms',
        'Standard SEO Configuration',
        'WhatsApp Integration',
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
        'Free Domain + Hosting (1 Year)',
        'SSL Certificate Included',
        'Full CMS Access (Client-Editable)',
        'Advanced UI/UX Detailing',
        'Google Analytics Integration',
        'Advanced SEO Configuration',
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
        'Free Domain + Hosting (1 Year)',
        'SSL Certificate Included',
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
        'Bespoke Software Architecture',
        'User Authentication System',
        'Role-Based Admin Dashboards',
        'Third-Party API Integrations',
        'Scalable Backend Infrastructure',
        'Dedicated Project Support',
        'Custom Scope & Revisions',
      ],
      highlighted: false,
    },
  ];

  return (
    <div id='pricing' className='w-full py-24 md:py-32 bg-slate-50 relative overflow-hidden'>
      {/* Optimized Background Grid */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]'></div>

      <div className='max-w-[1400px] mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16 md:mb-24'
        >
          <span className='text-orange-accent font-black tracking-[0.4em] uppercase text-[10px] md:text-sm mb-4 block'>Transparent Pricing</span>
          <h2 className='text-3xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter'>
            Affordable <span className='text-orange-accent italic'>Web Design</span> Packages in Bhiwandi
          </h2>
          <div className='w-20 md:w-24 h-1.5 bg-gradient-to-r from-orange-accent to-orange-hover mx-auto mb-8 rounded-full'></div>
          <p className='text-slate-500 max-w-2xl mx-auto text-base md:text-xl font-medium leading-relaxed px-2'>
            Transparent one-time development fees for premium digital solutions. Invest in your business growth today.
          </p>
        </motion.div>

        {/* Responsive Wrapping Grid: 1 Col (Mobile), 2 Col (Tablet), 3 Col (Desktop) */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch mb-24'>
          {plans.map((plan, index) => (
            <div key={index} className='h-full flex'>
              <PricingCard {...plan} />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='flex flex-col md:flex-row flex-wrap justify-center gap-x-12 gap-y-8 bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-slate-200 shadow-2xl shadow-slate-200/40 max-w-4xl mx-auto'
        >
          <div className='flex items-center gap-4 group'>
            <div className='bg-orange-accent/10 p-3 rounded-2xl group-hover:scale-105 transition-transform'>
              <HiCheckCircle className='text-orange-accent' size={28} />
            </div>
            <div>
              <p className='font-black text-slate-900 text-base md:text-lg uppercase tracking-tight'>One-Time Payment</p>
              <p className='text-slate-500 text-sm font-medium'>Zero Monthly Platform Fees</p>
            </div>
          </div>
          <div className='hidden md:block w-px h-16 bg-slate-200' />
          <div className='flex items-center gap-4 group'>
            <div className='bg-orange-accent/10 p-3 rounded-2xl group-hover:scale-105 transition-transform'>
              <HiCheckCircle className='text-orange-accent' size={28} />
            </div>
            <div>
              <p className='font-black text-slate-900 text-base md:text-lg uppercase tracking-tight'>100% Satisfaction</p>
              <p className='text-slate-500 text-sm font-medium'>Results-Driven Delivery</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
