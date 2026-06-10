import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { HiOutlineDocumentText, HiOutlineTemplate, HiOutlineSparkles, HiOutlineShoppingCart, HiOutlineChip } from 'react-icons/hi';

const Services = () => {
  const services = [
    {
      title: 'Static Website & Landing Pages',
      description: 'Single-page layouts, splash pages, and event launches designed for maximum impact and lightning-fast loading.',
      benefits: ['Single-Page Layout', 'Splash Pages', 'Mobile-First Config', 'Fast Delivery'],
      icon: HiOutlineDocumentText,
    },
    {
      title: 'Standard Dynamic Website',
      description: 'A professional 5-page setup matching your brand identity with dynamic features and essential SEO.',
      benefits: ['5-Page Setup', 'Interactive Forms', 'Standard SEO', 'Brand Integration'],
      icon: HiOutlineTemplate,
    },
    {
      title: 'Premium Dynamic Website',
      description: 'Up to 10 fully customized dynamic pages with integrated CMS for easy self-editing and advanced UI detailing.',
      benefits: ['10 Dynamic Pages', 'Full CMS Access', 'Advanced UI/UX', 'Google Analytics'],
      icon: HiOutlineSparkles,
      highlighted: true,
    },
    {
      title: 'E-commerce Website',
      description: 'Fully functional digital storefront with secure payment gateways, inventory management, and customer accounts.',
      benefits: ['Payment Gateways', 'Cart/Checkout System', 'Inventory Config', 'Coupon Systems'],
      icon: HiOutlineShoppingCart,
    },
    {
      title: 'Custom Web Apps & SaaS',
      description: 'Bespoke software architectures designed for complex business challenges, with secure auth and scalable backends.',
      benefits: ['Bespoke Architecture', 'User Authentication', 'Role-Based Dashboards', 'API Integrations'],
      icon: HiOutlineChip,
    },
  ];

  return (
    <div id='services' className='w-full py-24 md:py-32 bg-white relative overflow-hidden'>
      {/* Soft Decorative Elements */}
      <div className='absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-orange-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2'></div>
      <div className='absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2'></div>

      <div className='max-w-[1400px] mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16 md:mb-24'
        >
          <span className='text-orange-accent font-black tracking-[0.4em] uppercase text-[10px] md:text-sm mb-4 block'>Our Expertise</span>
          <h2 className='text-3xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter'>
            Premium <span className='text-orange-accent italic'>Web & SaaS</span> Development Services
          </h2>
          <div className='w-20 md:w-24 h-1.5 bg-gradient-to-r from-orange-accent to-orange-hover mx-auto mb-8 rounded-full'></div>
          <p className='text-slate-500 max-w-2xl mx-auto text-base md:text-xl font-medium leading-relaxed px-2'>
            We build more than just websites. We deliver high-performance digital engines engineered to scale your business in Bhiwandi and beyond.
          </p>
        </motion.div>

        {/* Responsive Wrapping Grid: 1 Col (Mobile), 2 Col (Tablet), 3 Col (Desktop) */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch'>
          {services.map((service, index) => (
            <div key={index} className='h-full flex'>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
