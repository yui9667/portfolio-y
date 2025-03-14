import { Button } from '@material-tailwind/react';
import QuizImage from '../../../src/assets/quiz.jpg';
import HotelImage from '../../../src/assets/hotelwebsite.jpg';
import './Task.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Task = () => {
  const projects = [
    {
      title: 'SWEJEN.COM',
      description: 'Full-Stack Hotel Booking Website with payment system.',
      img: HotelImage,
      language: 'React, Node.js, Express, MongoDB, Stripe',
      github: 'https://github.com/yui9667/hotel-website',
      liveDemo: 'https://swejencom.netlify.app/',
    },
    {
      title: 'Quiz Time',
      description:
        'This is a Group project from Sundsgårdens Folkhögskola. Using Trivia API about knowledge questions.',
      img: QuizImage,
      language: 'React(vite)',
      github: 'https://github.com/ezgsnyrt/group-project-react',
      liveDemo: 'https://ezgsnyrt.github.io/group-project-react/',
    },
  ];
  return (
    <>
      <section className='flex flex-col gap-20 '>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className='text-6xl mt-20 text-center text-bold tracking-wider relative max-md:text-5xl'
          style={{ fontFamily: ' Bebas Neue' }}
        >
          Project
          <motion.div
            className=' right-0 left-0 h-1 m-auto  absolute'
            style={{ backgroundColor: 'var(--btn-color)' }}
            initial={{ width: 0 }}
            animate={{ width: '20%' }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 5, ease: 'easeInOut' }}
          />
        </motion.h2>

        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            key={index}
            className='flex items-center justify-center drop-shadow-lg   '
          >
            <div
              className='project-container'
              style={{ backgroundColor: 'var(--container-color)' }}
            >
              <img
                src={project.img}
                alt={project.title}
                className='rounded project-image '
              />

              <div className='flex flex-col text-center justify-center items-center p-8   '>
                <h3 className='text-2xl , max-sm:text-lg'>{project.title}</h3>
                <p className='mt-3 text-xl , max-sm:text-lg'>
                  {project.language}
                </p>
                <p className='mt-1 text-x , max-sm:text-base'>
                  {project.description}
                </p>
                <div className='flex justify-center items-center tracking-wide drop-shadow-lg mt-5 max-md:flex-col max-md:gap-3 '>
                  <Button
                    className='mr-3 text-white text-sm rounded px-4 py-1 max-md:mr-0 max-md:px-6 '
                    style={{ backgroundColor: 'var(--btn-color)' }}
                  >
                    <a href={project.github} target='_blank'>
                      Github
                    </a>
                  </Button>
                  <Button
                    className='ml-3 text-white text-sm rounded px-6 py-1 max-md:ml-0'
                    style={{ backgroundColor: 'var(--btn-color)' }}
                  >
                    <a href={project.liveDemo} target='_blank'>
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        <Button
          variant='text'
          className=' flex items-center my-5 p-2 px-5 rounded m-auto mb-20 text-white shadow-lg  max-sm:text-sm '
          style={{ backgroundColor: 'var(--detail-btn-color)' }}
        >
          <Link to='/project' className='tracking-wider'>
            See More About Project
          </Link>
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
      </section>
    </>
  );
};
export default Task;
