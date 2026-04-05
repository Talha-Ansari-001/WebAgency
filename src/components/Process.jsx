import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { HiLightBulb, HiPencilAlt, HiCode, HiCheckCircle } from 'react-icons/hi';

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const steps = [
    { 
      title: 'Phase 01: Discovery & Research', 
      subtitle: 'The Foundation of Success',
      description: 'We dive deep into your business DNA. Through intensive research and competitor analysis, we identify the exact strategies needed to dominate your local market.',
      details: ['Competitor Benchmarking', 'User Persona Mapping', 'Conversion Goal Setting'],
      icon: HiLightBulb, 
      color: 'bg-blue-600',
    },
    { 
      title: 'Phase 02: Strategic UI/UX Design', 
      subtitle: 'Where Aesthetics Meets Logic',
      description: 'Our designers craft a high-fidelity blueprint of your website. We focus on "Eye-Tracking" patterns to ensure your customers look exactly where we want them to click.',
      details: ['Wireframe Architecture', 'High-Fidelity Mockups', 'Interactive Prototypes'],
      icon: HiPencilAlt, 
      color: 'bg-purple-600',
    },
    { 
      title: 'Phase 03: High-Performance Coding', 
      subtitle: 'Built for Speed & Security',
      description: 'Our developers bring the design to life using the latest tech stack. We optimize for sub-second load times, ensuring you never lose a customer to a slow page.',
      details: ['Sub-second Load Speed', 'Mobile-First Coding', 'SEO-Ready Structure'],
      icon: HiCode, 
      color: 'bg-green-600',
    },
    { 
      title: 'Phase 04: Launch & Optimization', 
      subtitle: 'The Start of Your Growth',
      description: 'We don\'t just "launch" and leave. We deploy your site with full analytics tracking and provide 12 months of technical support to ensure your business keeps growing.',
      details: ['Global Deployment', 'Conversion Tracking', '1-Year Priority Support'],
      icon: HiCheckCircle, 
      color: 'bg-orange-accent',
    },
  ];

  return (
    <div id='process' className='w-full py-32 bg-slate-50 px-4' ref={containerRef}>
      <div className='max-w-[1100px] mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-24'
        >
          <span className='text-orange-accent font-black tracking-[0.3em] uppercase text-sm mb-4 block'>How We Work</span>
          <h2 className='text-4xl md:text-6xl font-black text-slate-900 mb-6'>
            Our <span className='text-orange-accent'>Success Roadmap</span>
          </h2>
          <div className='w-24 h-1.5 bg-orange-accent mx-auto mb-8 rounded-full'></div>
          <p className='text-gray-600 max-w-2xl mx-auto text-xl font-medium leading-relaxed'>
            We\'ve refined our process over 50+ successful launches to guarantee a high-converting website every single time.
          </p>
        </motion.div>

        <div className='relative'>
          {/* Central Vertical Line (Desktop) */}
          <div className='absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 hidden lg:block rounded-full'></div>
          
          {/* Animated Progress Line (Desktop) */}
          <motion.div 
            className='absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-accent hidden lg:block rounded-full origin-top'
            style={{ scaleY }}
          />

          <div className='space-y-24 lg:space-y-40'>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-0 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className='w-full lg:w-[45%]'>
                  <div className={`p-8 md:p-12 bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-gray-100 transition-all duration-500 hover:border-orange-accent/30 group relative`}>
                    <span className='text-orange-accent font-black text-sm uppercase tracking-widest mb-2 block'>{step.subtitle}</span>
                    <h3 className='text-3xl font-black text-slate-900 mb-6 group-hover:text-orange-accent transition-colors'>{step.title}</h3>
                    <p className='text-gray-600 leading-relaxed font-medium mb-8 text-lg'>
                      {step.description}
                    </p>
                    <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      {step.details.map((detail, dIndex) => (
                        <li key={dIndex} className='flex items-center gap-2 text-slate-800 font-bold text-sm'>
                          <div className='w-1.5 h-1.5 bg-orange-accent rounded-full'></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Circle */}
                <div className='relative z-10 w-20 h-20 flex items-center justify-center lg:mx-auto'>
                  <motion.div 
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`w-16 h-16 ${step.color} text-white rounded-[1.5rem] flex items-center justify-center shadow-xl shadow-gray-200 border-4 border-white rotate-12 group-hover:rotate-0 transition-transform`}
                  >
                    <step.icon size={28} />
                  </motion.div>
                </div>

                {/* Empty Side for Spacing */}
                <div className='hidden lg:block lg:w-[45%]'></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
