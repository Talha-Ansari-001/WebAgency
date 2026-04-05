import { motion } from 'framer-motion';
import { HiLightningBolt, HiCursorClick, HiSparkles, HiSearch, HiSupport, HiCurrencyRupee } from 'react-icons/hi';

const WhyChooseUs = () => {
  const advantages = [
    {
      title: 'Ready in 7 Days',
      benefit: 'Get Online Fast',
      description: 'Don\'t wait months. We use a proven system to build and launch your professional website in just 5 to 7 days.',
      icon: HiLightningBolt,
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Built to Get Clients',
      benefit: 'More Leads',
      description: 'Your website is designed with one goal: turning visitors into paying customers through clear, easy-to-use layouts.',
      icon: HiCursorClick,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'World-Class Branding',
      benefit: 'Build Instant Trust',
      description: 'We give your business a premium, high-end look that makes you look like an industry leader and builds instant confidence with your customers.',
      icon: HiSparkles,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Google Search Ready',
      benefit: 'Be Found Easily',
      description: 'We set up your site so it\'s ready for Google, helping local customers find your business when they search online.',
      icon: HiSearch,
      color: 'from-purple-500 to-indigo-500',
    },
    {
      title: '1 Year Full Support',
      benefit: 'Expert Help',
      description: 'You\'re never alone. We provide a full year of technical support and updates to keep your site running perfectly.',
      icon: HiSupport,
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'No Hidden Costs',
      benefit: 'Honest Pricing',
      description: 'The price we agree on is the final price. No surprise bills, no extra charges, and no hidden platform fees.',
      icon: HiCurrencyRupee,
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <div id='why-choose-us' className='w-full py-32 bg-[#050810] text-white relative overflow-hidden'>
      {/* Technical Grid Background */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]'></div>
      <div className='absolute inset-0 bg-radial-gradient from-orange-accent/5 via-transparent to-transparent'></div>

      <div className='max-w-[1240px] mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-24'
        >
          <span className='text-orange-accent font-black tracking-[0.4em] uppercase text-sm mb-4 block'>Why Work With Us</span>
          <h2 className='text-4xl md:text-7xl font-black mb-8 tracking-tighter'>
            Everything You Need to <br />
            <span className='bg-gradient-to-r from-orange-accent via-orange-hover to-orange-500 bg-clip-text text-transparent italic'>
              Grow Your Business
            </span>
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed font-medium'>
            We make web development simple, fast, and results-driven. No jargon—just a website that <span className='text-white underline decoration-orange-accent decoration-2 underline-offset-4'>actually works.</span>
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch'>
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className='group relative'
            >
              <div className='h-full p-10 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 transition-all duration-500 hover:bg-white/[0.06] hover:border-orange-accent/40 flex flex-col relative z-10 overflow-hidden'>
                
                <div className='flex items-start justify-between mb-10'>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg shadow-black group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                    <item.icon size={28} className='text-white' />
                  </div>
                  <div className='bg-orange-accent/10 border border-orange-accent/30 px-3 py-1 rounded-full'>
                    <span className='text-[10px] font-black uppercase tracking-wider text-orange-accent'>{item.benefit}</span>
                  </div>
                </div>

                <h3 className='text-2xl font-black mb-4 text-white group-hover:text-orange-accent transition-colors duration-300'>
                  {item.title}
                </h3>
                
                <p className='text-gray-400 leading-relaxed font-medium flex-grow text-sm'>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
