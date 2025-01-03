//import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated } from '@react-spring/web';
import './Welcome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './Welcome.css';
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
    <div className='welcome-container'>
      <div>
        <animated.div
          className='flex justify-center
            items-center h-[80vh] relative'
          style={planeAnimation}
        >
          <h1 className='mr-5 text-4xl font-semibold tracking-wider drop-shadow-md max-md:text-3xl welcome-letter'>
            Welcome to Yui Jensen Page
          </h1>
          <FontAwesomeIcon
            icon={faPlane}
            className='drop-shadow-md text-[#c8d184] text-6xl max-md:text-5xl plane'
          />
        </animated.div>
        {showIcon && (
          <animated.div
            className='flex flex-col justify-center
              items-center absolute top-0 right-0 left-0 bottom-0'
            style={scrollAnimation}
          >
            <p className='text-xl z-10 max-md:text-lg max-md:mt-20'>
              Scroll Down
            </p>
            <FontAwesomeIcon
              icon={faArrowDown}
              className='text-[#5b3e70] text-xl z-10 max-md:text-sm'
            />
          </animated.div>
        )}
      </div>
    </div>
  );
};

export default Welcome;
