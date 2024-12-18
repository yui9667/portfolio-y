import './AboutMe.css';
import { Button } from '@material-tailwind/react';
import { motion } from 'framer-motion';
const AboutMe = () => {
  return (
    <>
      <motion.div
        className='flex flex-row justify-center items-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className='flex flex-col justify-center items-center'>
          <h2 className='mx-10 w-96 text-3xl tracking-wide'>
            I am <strong className='text-[#EF5AB3]'>Yui Jensen {''}</strong>
            Junior Front-End Developer | UX-Focused with Backend Knowledge
          </h2>
          <Button
            variant='text'
            className=' flex items-center my-5 p-2 rounded'
          >
            <a href=''>See More About Me</a>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={3}
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
              />
            </svg>
          </Button>
          <div>
            <Button className='mr-10 bg-[#AE5CF2] text-white text-base rounded px-5 py-1 tracking-wide drop-shadow-lg'>
              <a href=''>Resume</a>
            </Button>
            <Button className='bg-[#AE5CF2] text-base rounded px-5 py-1 tracking-wide drop-shadow-lg'>
              <a href='https://www.linkedin.com/in/yui-jensen67/'>Linkedin</a>
            </Button>
          </div>
        </div>
        <img
          src='../../../src/assets/profile.png'
          alt='profile'
          className='w-96 mb-20 drop-shadow-lg'
        />
      </motion.div>
    </>
  );
};
export default AboutMe;
