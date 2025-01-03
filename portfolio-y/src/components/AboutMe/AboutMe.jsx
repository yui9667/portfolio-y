import './AboutMe.css';
import { Button } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const AboutMe = () => {
  return (
    <>
      <motion.div
        className='flex flex-row justify-center items-center z-10 aboutMe'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className='flex flex-col justify-center items-center'>
          <h2 className='mx-10 w-96 text-3xl tracking-wide'>
            I am{' '}
            <strong style={{ color: 'var(--detail-btn-color)' }}>
              Yui Jensen {''}
            </strong>
            Junior Front-End Developer | UX-Focused with Backend Knowledge
          </h2>
          <Button
            variant='text'
            className=' flex items-center my-8 p-2 px-5 rounded text-white shadow-lg tracking-wider'
            style={{ backgroundColor: 'var(--detail-btn-color)' }}
          >
            <Link to='/about-me'>See More About Me</Link>
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
            <Button
              className='mr-10  text-white text-base rounded px-5 py-1 tracking-wide drop-shadow-lg'
              style={{ backgroundColor: 'var(--btn-color)' }}
            >
              <a href='../../../src/assets/Resume.pdf'>Resume</a>
            </Button>
            <Button
              className=' text-base rounded px-5 py-1 tracking-wide drop-shadow-lg'
              style={{ backgroundColor: 'var(--btn-color)' }}
            >
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
