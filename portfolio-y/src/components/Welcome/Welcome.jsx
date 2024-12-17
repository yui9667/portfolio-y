import { Parallax, ParallaxLayer } from '@react-spring/parallax';
//import { useSpring, animated } from '@react-spring/web';
import './Welcome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

const Welcome = () => {
  return (
    <div className=' overflow-hidden h-screen'>
      <Parallax pages={3} className='flex justify-center '>
        <ParallaxLayer sticky={{ start: 0, end: 1 }} speed={0.3}>
          <div className='animation'>
            <div
              className='flex justify-center
            items-center h-screen'
            >
              <FontAwesomeIcon
                icon={faPlane}
                style={{
                  color: '#000',
                  fontSize: '50px',
                }}
              />
              <h1>Heelllo</h1>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.5}
          className='text-xl'
          style={{
            backgroundColor: '#F7CACA',
          }}
        >
          Hello2
        </ParallaxLayer>
      </Parallax>
      <div className='div'>h5</div>
    </div>
  );
};

export default Welcome;
