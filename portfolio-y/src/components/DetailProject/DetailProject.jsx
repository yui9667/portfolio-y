import WeatherImage from '../../assets/weather.jpg';
import QuizImage from '../../../src/assets/quiz.jpg';
import HotelImage from '../../../src/assets/hotelwebsite.jpg';
import { motion } from 'framer-motion';
import { Button } from '@material-tailwind/react';
import './DetailProject.css';
import Footer from '../Footer/Footer';
const DetailProject = () => {
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
    {
      title: 'Weather Forecasts',
      description:
        'Using the OpenWeatherMap API, users can enter a location and see the weather for today and the next 7 days.',
      img: WeatherImage,
      language: 'HTML, Sass, JavaScript',
      github: 'https://github.com/yui9667/weather-app',
      liveDemo: 'https://yui9667.github.io/weather-app/',
    },
  ];
  return (
    <>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className='text-6xl mt-20 text-center text-bold tracking-wider relative  max-md:text-5xl'
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
      <div className='flex items-center justify-center gap-10 h-screen parent-container-project'>
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            key={index}
            className=' drop-shadow-lg '
          >
            <div className='flex flex-col rounded container-project'>
              <img
                src={project.img}
                alt={project.title}
                className='rounded detail-project-image'
              />

              <div className='flex flex-col text-center justify-center items-center p-8 '>
                <h3 className='text-2xl, max-sm:text-lg'>{project.title}</h3>
                <p className='text-lg, max-sm:text-lg'>{project.language}</p>
                <p className='text-base, max-sm:text-base'>
                  {project.description}
                </p>
                <div className='flex justify-center items-center tracking-wide drop-shadow-lg mt-5 max-xm:flex-col max-xm:gap-3'>
                  <Button
                    className='mr-3 text-white text-sm rounded px-1 py-2  max-xm:mr-0 max-xm:px-6'
                    style={{ backgroundColor: 'var(--btn-color)' }}
                  >
                    <a href={project.github} target='_blank'>
                      Github
                    </a>
                  </Button>
                  <Button
                    className='ml-1 text-white text-sm rounded px-3 py-2  max-xm:ml-0'
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
        <h3 className='max-lg:mb-20'>Currently creating new project now</h3>
      </div>
      <Footer />
    </>
  );
};

export default DetailProject;
