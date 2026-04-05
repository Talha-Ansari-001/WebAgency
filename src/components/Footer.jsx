import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-12'>
        <div className='col-span-1 md:col-span-2'>
          <h2 className='text-3xl font-bold text-orange-accent mb-6'>WEB<span className='text-white'>AGENCY</span></h2>
          <p className='text-gray-400 mb-8 max-w-md'>
            We are a full-service web development agency dedicated to helping businesses grow their online presence with modern, high-performance websites.
          </p>
          <div className='flex gap-6'>
            <FaFacebook size={24} className='hover:text-orange-accent cursor-pointer transition-colors duration-300' />
            <FaTwitter size={24} className='hover:text-orange-accent cursor-pointer transition-colors duration-300' />
            <FaLinkedin size={24} className='hover:text-orange-accent cursor-pointer transition-colors duration-300' />
            <FaInstagram size={24} className='hover:text-orange-accent cursor-pointer transition-colors duration-300' />
          </div>
        </div>
        <div>
          <h3 className='text-xl font-bold mb-6'>Quick Links</h3>
          <ul className='space-y-4'>
            <li><Link to='home' smooth={true} duration={500} offset={-80} className='text-gray-400 hover:text-orange-accent cursor-pointer'>Home</Link></li>
            <li><Link to='services' smooth={true} duration={500} offset={-80} className='text-gray-400 hover:text-orange-accent cursor-pointer'>Services</Link></li>
            <li><Link to='portfolio' smooth={true} duration={500} offset={-80} className='text-gray-400 hover:text-orange-accent cursor-pointer'>Portfolio</Link></li>
            <li><Link to='pricing' smooth={true} duration={500} offset={-80} className='text-gray-400 hover:text-orange-accent cursor-pointer'>Pricing</Link></li>
            <li><Link to='contact' smooth={true} duration={500} offset={-80} className='text-gray-400 hover:text-orange-accent cursor-pointer'>Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className='text-xl font-bold mb-6'>Contact Info</h3>
          <ul className='space-y-4 text-gray-400'>
            <li>123 Web Street, Digital City</li>
            <li>contact@webagency.com</li>
            <li>+91 98765 43210</li>
          </ul>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-gray-500 text-sm'>
        <p>&copy; {new Date().getFullYear()} WebAgency. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
