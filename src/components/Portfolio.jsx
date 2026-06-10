import { motion } from 'framer-motion';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  const projects = [
    {
      title: 'Restaurant Website',
      description: 'Increased online orders by 30% with a modern ordering system.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Fitness Studio App',
      description: 'Boosted membership sign-ups by 25% through improved UX.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'E-commerce Fashion',
      description: 'Achieved 2x conversion rate with optimized checkout flow.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Real Estate Portal',
      description: 'Generated 40% more leads with high-performance search.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <div id='portfolio' className='w-full py-24 bg-gray-50'>
      <div className='max-w-[1240px] mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-5xl font-bold text-slate-900 mb-4'>
            Our Recent <span className='text-orange-accent'>Work</span> & Case Studies
          </h2>
          <div className='w-20 h-1 bg-orange-accent mx-auto mb-6'></div>
          <p className='text-gray-600 max-w-2xl mx-auto text-lg'>
            Explore how AshCore Technologies delivers results-driven websites and custom SaaS applications for clients in Mumbai, Thane, and globally.
          </p>
        </motion.div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
