import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from 'framer-motion';
import './ProjectText.css';
import PropTypes from 'prop-types';
const ProjectText = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 30,
    stiffness: 200,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);
  const directionFactor = useRef(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });
  return (
    <>
      <div className='scroller-container'>
        <motion.div className='scroller ' style={{ x }}>
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={i}>{children}</span>
          ))}
        </motion.div>
      </div>
    </>
  );
};
ProjectText.propTypes = {
  children: PropTypes.node.isRequired,
  baseVelocity: PropTypes.number,
};
export default ProjectText;

export function ProjectText2() {
  return (
    <section>
      <ProjectText baseVelocity={-5}>yuijensen</ProjectText>
      <ProjectText baseVelocity={5}>yuijensen</ProjectText>
    </section>
  );
}
