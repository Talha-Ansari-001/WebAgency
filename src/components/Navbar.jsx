import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'services' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Pricing', to: 'pricing' },
    { name: 'Process', to: 'process' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={
        shadow
          ? 'fixed w-full h-20 shadow-2xl z-[100] ease-in-out duration-300 bg-white/80 backdrop-blur-md border-b border-gray-200'
          : 'fixed w-full h-24 z-[100] bg-transparent ease-in-out duration-300'
      }
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className='fixed top-0 left-0 right-0 h-1.5 bg-orange-accent origin-left z-[110]'
        style={{ scaleX }}
      />

      <div className='flex justify-between items-center w-full h-full px-6 2xl:px-16 max-w-[1400px] mx-auto'>
        <Link to='home' smooth={true} duration={500} className='cursor-pointer flex items-center gap-3'>
          <img 
            src="/Logo.png" 
            alt="Logo" 
            className={`${shadow ? 'h-10' : 'h-14'} w-auto object-contain transition-all duration-300 mix-blend-multiply`}
          />
          <span className={`font-black tracking-tighter transition-all duration-300 ${shadow ? 'text-xl' : 'text-2xl'} text-slate-900`}>
            AshCore<span className="text-orange-accent">Technologies</span>
          </span>
        </Link>
        
        <div className='flex items-center'>
          <ul className='hidden lg:flex items-center mr-10'>
            {navLinks.map((link) => (
              <li key={link.name} className='ml-10 text-sm font-black uppercase tracking-widest group'>
                <Link 
                  to={link.to} 
                  smooth={true} 
                  duration={500} 
                  offset={-80}
                  className='cursor-pointer text-slate-700 hover:text-orange-accent transition-all duration-300 relative'
                >
                  {link.name}
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-accent transition-all duration-300 group-hover:w-full'></span>
                </Link>
              </li>
            ))}
          </ul>
          
          <div className='hidden lg:block'>
            <Link to='contact' smooth={true} duration={500} offset={-80}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-orange-accent transition-all duration-300 shadow-lg'
              >
                Start Your Project
              </motion.button>
            </Link>
          </div>

          {/* Mobile Button */}
          <div onClick={handleClick} className='lg:hidden cursor-pointer p-2 hover:bg-gray-100 rounded-xl transition-colors'>
            {nav ? <HiX size={30} className='text-slate-900' /> : <HiMenu size={30} className='text-slate-900' />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav ? 'lg:hidden fixed left-0 top-0 w-full h-screen bg-slate-900/95 backdrop-blur-sm z-[200]' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed right-0 top-0 w-[85%] sm:w-[60%] h-screen bg-white p-10 ease-in duration-500 shadow-2xl'
              : 'fixed right-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div className='flex flex-col h-full'>
            <div className='flex w-full items-center justify-between mb-12'>
              <div className='flex items-center gap-2'>
                <img src="/Logo.png" alt="Logo" className="h-10 w-auto object-contain mix-blend-multiply" />
                <span className='font-black tracking-tighter text-lg text-slate-900'>
                  AshCore<span className="text-orange-accent">Technologies</span>
                </span>
              </div>
              <div
                onClick={handleClick}
                className='p-3 cursor-pointer bg-gray-100 rounded-2xl hover:bg-orange-accent hover:text-white transition-all'
              >
                <HiX size={24} />
              </div>
            </div>

            <nav className='flex flex-col space-y-6'>
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.to} 
                  smooth={true} 
                  duration={500} 
                  offset={-80}
                  onClick={() => setNav(false)}
                >
                  <span className='text-2xl font-black text-slate-900 uppercase tracking-tighter hover:text-orange-accent transition-colors block cursor-pointer'>
                    {link.name}
                  </span>
                </Link>
              ))}
            </nav>

            <div className='mt-auto pt-10 border-t border-gray-100'>
              <Link to='contact' smooth={true} duration={500} offset={-80} onClick={() => setNav(false)}>
                <button className='w-full bg-orange-accent text-white px-6 py-5 rounded-[2rem] font-black text-xl shadow-xl shadow-orange-accent/20'>
                  Get Your Website Now
                </button>
              </Link>
              <p className='text-center mt-6 text-gray-500 font-medium'>We reply within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
