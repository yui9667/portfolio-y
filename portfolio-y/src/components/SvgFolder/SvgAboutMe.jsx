import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const SvgAboutMe = () => {
  return (
    <>
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={0.2}>
          <svg
            viewBox='0 0 2000 1080'
            xmlns='http://www.w3.org/2000/svg'
            className='w-full h-auto  '
          >
            <g transform='translate(1938 1643)'>
              <path
                d='M227 -3.9C227 94.9 113.5 189.7 10.5 189.7C-92.5 189.7 -185.1 94.9 -185.1 -3.9C-185.1 -102.7 -92.5 -205.4 10.5 -205.4C113.5 -205.4 227 -102.7 227 -3.9Z'
                stroke='#7542ab'
                fill='none'
                strokeWidth='23'
              ></path>
            </g>
          </svg>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};
export default SvgAboutMe;
