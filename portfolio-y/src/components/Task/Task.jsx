import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Button } from '@material-tailwind/react';

const Task = () => {
  const projects = [
    {
      title: 'Weather Forecasts',
      description:
        'Using the OpenWeatherMap API, users can enter a location and see the weather for today and the next 7 days.',
      img: '../../assets/weather.jpg',
      language: 'HTML, Sass; JavaScript',
      github: 'https://github.com/yui9667/weather-app',
      liveDemo: 'https://yui9667.github.io/weather-app/',
    },
    {
      title: 'Quiz Time',
      description:
        'This is a Group project from Sundsgårdens Folkhögskola. Using Trivia API about knowledge questions.',
      img: '../../../src/assets/quiz.jpg',
      language: 'React(vite)',
      github: 'https://github.com/ezgsnyrt/group-project-react',
      liveDemo: 'https://ezgsnyrt.github.io/group-project-react/',
    },
  ];
  return (
    <>
      <section className='flex '>
        <Parallax pages={projects.length}>
          <ParallaxLayer speed={2}>
            <svg
              className='absolute left-0 h-full'
              viewBox='0 0 320 1440'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='
                    M160,0 
                    C180,50,140,50,160,100 
                    C200,200,120,300,160,400 
                    C220,500,100,600,160,720 
                    C200,840,120,960,160,1080 
                    C180,1150,140,1150,160,1200 
                    C180,1300,140,1300,160,1440 
                    L0,1440 
                    L0,0 
                    Z'
                fill='#be80d6'
              />
            </svg>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{ clipPath: 'polygon(0 0,100% 0,100% 100%, 0 85%' }}
          ></ParallaxLayer>
          {projects.map((project, index) => (
            <ParallaxLayer
              key={index}
              offset={index}
              speed={0.5}
              className='flex flex-col items-center justify-center'
            >
              <div className='bg-white rounded p-20  drop-shadow-lg text-center '>
                <img
                  src={project.name}
                  alt={project.title}
                  className='w-full rounded mb-20 transition duration-500 ease-in-out '
                />
              </div>
              <div className='flex flex-col justify-center items-center'>
                <h3 className='text-3xl'>{project.title}</h3>
                <p className='text-xl'>{project.language}</p>
                <p className='text-xl'>{project.description}</p>
                <div className='flex justify-center items-center'>
                  <Button className='mr-3 bg-[#AE5CF2] text-white text-base rounded px-9 py-1 tracking-wide drop-shadow-lg'>
                    <a href={project.github} target='_blank'>
                      Github
                    </a>
                  </Button>
                  <Button className='ml-3 bg-[#AE5CF2] text-white text-base rounded px-5 py-1 tracking-wide drop-shadow-lg'>
                    <a href={project.liveDemo} target='_blank'>
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </ParallaxLayer>
          ))}
        </Parallax>
      </section>
    </>
  );
};
export default Task;
