import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import AboutMe from '../AboutMe/AboutMe';

const SvgAboutMe = () => {
  return (
    <>
      <Parallax pages={2}>
        <ParallaxLayer sticky={{ start: 0, end: 2 }}>
          <AboutMe />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <svg
            viewBox='0 0 2000 1080'
            xmlns='http://www.w3.org/2000/svg'
            className='w-full h-screen  '
          >
            <g transform='translate(1938 1643)'>
              <path
                d='M227 -3.9C227 94.9 113.5 189.7 10.5 189.7C-92.5 189.7 -185.1 94.9 -185.1 -3.9C-185.1 -102.7 -92.5 -205.4 10.5 -205.4C113.5 -205.4 227 -102.7 227 -3.9Z'
                stroke='#7542ab'
                fill='none'
                strokeWidth='20'
              ></path>
            </g>
          </svg>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <svg
            viewBox='0 0 2000 1080'
            xmlns='http://www.w3.org/2000/svg'
            className='w-full h-screen '
          >
            <g transform='translate(627 1533)'>
              <path
                d='M227 -3.9C227 94.9 113.5 189.7 10.5 189.7C-92.5 189.7 -185.1 94.9 -185.1 -3.9C-185.1 -102.7 -92.5 -205.4 10.5 -205.4C113.5 -205.4 227 -102.7 227 -3.9Z'
                stroke='#7542ab'
                fill='none'
                strokeWidth='20'
              ></path>
            </g>
          </svg>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <svg
            viewBox='0 0 2000 1080'
            xmlns='http://www.w3.org/2000/svg'
            className='w-full h-screen '
          >
            <g transform='translate(1183 612)'>
              <path
                d='M183.7 8.1C183.7 106.7 91.8 213.3 -3.1 213.3C-98.1 213.3 -196.2 106.7 -196.2 8.1C-196.2 -90.4 -98.1 -180.8 -3.1 -180.8C91.8 -180.8 183.7 -90.4 183.7 8.1Z'
                stroke='#7542ab'
                fill='none'
                strokeWidth='20'
              ></path>
            </g>
          </svg>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <svg
            viewBox='0 0 2000 1080'
            xmlns='http://www.w3.org/2000/svg'
            className='w-full h-screen '
          >
            <g transform='translate(52 344)'>
              <path
                d='M186.8 -4.8C186.8 80.5 93.4 161.1 7.9 161.1C-77.5 161.1 -155.1 80.5 -155.1 -4.8C-155.1 -90.1 -77.5 -180.1 7.9 -180.1C93.4 -180.1 186.8 -90.1 186.8 -4.8Z'
                stroke='#7542ab'
                fill='none'
                strokeWidth='20'
              ></path>
            </g>
          </svg>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};
export default SvgAboutMe;
