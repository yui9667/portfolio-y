//import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated } from '@react-spring/web';
import './Welcome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Welcome = () => {
  const [showIcon, setShowIcon] = useState(false);
  const planeAnimation = useSpring({
    from: { transform: 'translateX(-1300px)' },
    to: { transform: 'translateX(0px)' },
    config: { duration: 5000, easing: (t) => t * t * (3 - 2 * t) },
    onRest: () => setShowIcon(true),
  });
  const scrollAnimation = useSpring({
    from: {
      transform: 'transformY(20px)',
    },
    to: { transform: showIcon ? 'translateY(-20px)' : 'transformY(0px)' },
    loop: { reverse: true },
    config: { tension: 50, friction: 14 },
  });
  return (
    <div className=' '>
      {/* <Parallax pages={1} className='flex justify-center '>
        <ParallaxLayer sticky={{ start: 0, end: 1 }} speed={0.3}> */}
      <div className='animation'>
        <animated.div
          className='flex justify-center
            items-center h-[80vh]'
          style={planeAnimation}
        >
          <h1 className='mr-5 text-4xl font-semibold tracking-wider drop-shadow-md'>
            Welcome to Yui Jensen Portfolio
          </h1>
          <FontAwesomeIcon
            icon={faPlane}
            className='drop-shadow-md text-[#c8d184] text-6xl'
          />
        </animated.div>
        {showIcon && (
          <animated.div
            className='flex flex-col justify-center
              items-center mb-20 pb-20'
            style={scrollAnimation}
          >
            <p>Scroll Down</p>
            <FontAwesomeIcon
              icon={faArrowDown}
              className='text-[#5b3e70] text-5xl'
            />
          </animated.div>
        )}
      </div>
      {/* </ParallaxLayer>
      </Parallax> */}
    </div>
  );
};

export default Welcome;
