import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiClock } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id='contact' className='w-full py-24 bg-white px-4'>
      <div className='max-w-[1240px] mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-5xl font-bold text-slate-900 mb-4'>
            Get Free <span className='text-orange-accent'>Consultation</span>
          </h2>
          <div className='w-20 h-1 bg-orange-accent mx-auto mb-6'></div>
          <p className='text-gray-600 max-w-2xl mx-auto text-lg'>
            Tell us about your project and we'll get back to you with a personalized growth plan.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-3 gap-12'>
          <div className='lg:col-span-1 space-y-8'>
            <div className='bg-orange-50 p-8 rounded-[2.5rem] space-y-8'>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>Contact Info</h3>
              
              <div className='flex items-center gap-4 group'>
                <div className='bg-white p-4 rounded-2xl shadow-sm text-orange-accent group-hover:bg-orange-accent group-hover:text-white transition-all duration-300'>
                  <HiPhone size={24} />
                </div>
                <div>
                  <p className='text-gray-500 text-sm font-bold uppercase tracking-wider'>Call Us</p>
                  <p className='text-slate-900 font-bold text-lg'>+91 98765 43210</p>
                </div>
              </div>

              <div className='flex items-center gap-4 group'>
                <div className='bg-white p-4 rounded-2xl shadow-sm text-orange-accent group-hover:bg-orange-accent group-hover:text-white transition-all duration-300'>
                  <HiMail size={24} />
                </div>
                <div>
                  <p className='text-gray-500 text-sm font-bold uppercase tracking-wider'>Email Us</p>
                  <p className='text-slate-900 font-bold text-lg'>hello@webagency.com</p>
                </div>
              </div>

              <div className='flex items-center gap-4 group'>
                <div className='bg-white p-4 rounded-2xl shadow-sm text-orange-accent group-hover:bg-orange-accent group-hover:text-white transition-all duration-300'>
                  <HiClock size={24} />
                </div>
                <div>
                  <p className='text-gray-500 text-sm font-bold uppercase tracking-wider'>Response Time</p>
                  <p className='text-slate-900 font-bold text-lg'>Within 24 hours</p>
                </div>
              </div>
            </div>
            
            <div className='p-8 rounded-[2.5rem] border-2 border-dashed border-gray-200 text-center'>
              <p className='text-gray-500 font-medium italic'>
                "They delivered exactly what they promised, on time and within budget."
              </p>
            </div>
          </div>

          <div className='lg:col-span-2'>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='bg-white p-8 md:p-12 shadow-2xl shadow-gray-200 rounded-[2.5rem] border border-gray-100'
            >
              <form className='grid gap-8' onSubmit={(e) => e.preventDefault()}>
                <div className='grid md:grid-cols-2 gap-8'>
                  <div className='flex flex-col'>
                    <label className='text-sm font-black text-slate-900 mb-3 uppercase tracking-widest'>Your Name</label>
                    <input
                      type='text'
                      placeholder='e.g. Rahul Sharma'
                      className='p-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-orange-accent focus:outline-none transition-all duration-300 font-medium'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-sm font-black text-slate-900 mb-3 uppercase tracking-widest'>Email Address</label>
                    <input
                      type='email'
                      placeholder='e.g. rahul@example.com'
                      className='p-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-orange-accent focus:outline-none transition-all duration-300 font-medium'
                    />
                  </div>
                </div>
                <div className='flex flex-col'>
                  <label className='text-sm font-black text-slate-900 mb-3 uppercase tracking-widest'>Project Details</label>
                  <textarea
                    rows='5'
                    placeholder='Tell us about your business and what you want to achieve...'
                    className='p-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-orange-accent focus:outline-none transition-all duration-300 font-medium'
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 20px 25px -5px rgba(255, 107, 0, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full bg-gradient-to-r from-orange-accent to-orange-hover text-white font-black text-xl py-5 rounded-2xl shadow-xl shadow-orange-accent/10 transition-all duration-300'
                >
                  Get Your Free Plan Now
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
