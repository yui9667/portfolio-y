import WeatherImage from '../../assets/weather.jpg';
import QuizImage from '../../../src/assets/quiz.jpg';
import { motion } from 'framer-motion';
import { Button } from '@material-tailwind/react';
//import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './DetailProject.css';
const DetailProject = () => {
  const projects = [
    {
      title: 'Weather Forecasts',
      description:
        'Using the OpenWeatherMap API, users can enter a location and see the weather for today and the next 7 days.',
      img: WeatherImage,
      language: 'HTML, Sass, JavaScript',
      github: 'https://github.com/yui9667/weather-app',
      liveDemo: 'https://yui9667.github.io/weather-app/',
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
      <Nav />
      <div className='detail-project-container'></div>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className='text-6xl mt-20 text-center text-bold tracking-wider relative'
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
      <div className='flex items-center justify-center gap-10 h-screen'>
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            key={index}
            className=' drop-shadow-lg '
          >
            <div
              className='flex flex-col rounded '
              style={{
                width: '100% ',
                maxWidth: '300px',
                backgroundColor: 'var(--container-color)',
              }}
            >
              <img
                src={project.img}
                alt={project.title}
                className='rounded  '
              />

              <div className='flex flex-col justify-center items-center p-8 '>
                <h3 className='text-2xl'>{project.title}</h3>
                <p className='text-lg'>{project.language}</p>
                <p className='text-base'>{project.description}</p>
                <div className='flex justify-center items-center tracking-wide drop-shadow-lg mt-5'>
                  <Button
                    className='mr-3  text-white text-sm rounded px-5 py-2 '
                    style={{ backgroundColor: 'var(--btn-color)' }}
                  >
                    <a href={project.github} target='_blank'>
                      Github
                    </a>
                  </Button>
                  <Button
                    className='ml-1  text-white text-sm rounded px-2 py-2 '
                    style={{ backgroundColor: 'var(--btn-color)' }}
                  >
                    <a href={project.liveDemo} target='_blank'>
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        Currently creating new project now
      </div>
    </>
  );
};

export default DetailProject;
