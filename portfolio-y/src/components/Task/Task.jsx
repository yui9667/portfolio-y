import { Button } from '@material-tailwind/react';
import WeatherImage from '../../assets/weather.jpg';
import QuizImage from '../../../src/assets/quiz.jpg';
import './Task.css';
import { motion } from 'framer-motion';
const Task = () => {
  const projects = [
    {
      title: 'Weather Forecasts',
      description:
        'Using the OpenWeatherMap API, users can enter a location and see the weather for today and the next 7 days.',
      img: WeatherImage,
      language: 'HTML, Sass; JavaScript',
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
      <section className='flex flex-col gap-20 mb-20 h-screen'>
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
            className=' right-0 left-0 h-1 m-auto bg-[#AE5CF2] absolute'
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
            className='flex items-center justify-center drop-shadow-lg  '
          >
            <div className='flex flex-row-reverse bg-[#fff] w-1/2 rounded '>
              <img
                src={project.img}
                alt={project.title}
                className='w-1/2  justify-self-end rounded  '
              />

              <div className='flex flex-col justify-center items-center p-8 '>
                <h3 className='text-2xl'>{project.title}</h3>
                <p className='text-xl'>{project.language}</p>
                <p className='text-x'>{project.description}</p>
                <div className='flex justify-center items-center tracking-wide drop-shadow-lg mt-5'>
                  <Button className='mr-3 bg-[#AE5CF2] text-white text-base rounded px-5 py-1 '>
                    <a href={project.github} target='_blank'>
                      Github
                    </a>
                  </Button>
                  <Button className='ml-3 bg-[#AE5CF2] text-white text-base rounded px-2 py-1 '>
                    <a href={project.liveDemo} target='_blank'>
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
};
export default Task;
