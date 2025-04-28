import { motion } from 'framer-motion';
import './Skills.css';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiExpress,
  SiTypescript,
  SiSass,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGithub,
  SiGit,
  SiNextdotjs,
  SiVitest,
} from 'react-icons/si';
import Footer from '../Footer/Footer';
const Skills = () => {
  return (
    <>
      <section id='skills'>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className='text-6xl mt-20 text-center text-bold tracking-wider relative mb-20 max-md:text-5xl'
          style={{ fontFamily: ' Bebas Neue' }}
        >
          Skills
          <motion.div
            className=' right-0 left-0 h-1 m-auto absolute'
            style={{ backgroundColor: 'var(--btn-color)' }}
            initial={{ width: 0 }}
            animate={{ width: '20%' }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 5, ease: 'easeInOut' }}
          />
        </motion.h2>
        <motion.div
          className='flex flex-col justify-center items-center skills'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ once: true, amount: 0.5 }}
        >
          <h3 className='uppercase text-2xl mb-10 max-md:text-xl, max-sm:text-base'>
            Languages
          </h3>
          <div className='flex flex-row gap-20 items-center mb-10 max-sm:flex-col'>
            {[SiHtml5, SiCss3, SiJavascript, SiTypescript].map(
              (Icon, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 100, opacity: 1 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ type: 'spring', stiffness: 50 }}
                >
                  <Icon className='icon' />
                </motion.div>
              )
            )}
          </div>

          <h3 className='uppercase text-2xl mb-10 max-md:text-xl, max-sm:text-base'>
            Styling & Tools & Libraries
          </h3>
          <div className='flex flex-row gap-20 items-center mb-10 max-sm:flex-col'>
            {[SiSass, SiTailwindcss, SiBootstrap].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: 'spring', stiffness: 50 }}
              >
                <Icon className='icon' />
              </motion.div>
            ))}
          </div>
          <h3 className='uppercase text-2xl mb-10 max-md:text-xl, max-sm:text-base'>
            Design & Prototyping
          </h3>
          <div className='mb-10 max-sm:flex-col'>
            {[SiFigma].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: 'spring', stiffness: 50 }}
              >
                <Icon className='icon' />
              </motion.div>
            ))}
          </div>
          <h3 className='uppercase text-center text-2xl mb-10 max-md:text-xl, max-sm:text-base'>
            Front-End Libraries & Frameworks
          </h3>
          <div className='flex flex-row gap-20 items-center mb-10 max-sm:flex-col'>
            {[SiReact, SiNextdotjs].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: 'spring', stiffness: 50 }}
              >
                <Icon className='icon' />
              </motion.div>
            ))}
          </div>
          <h3 className='uppercase text-2xl items-center text-center justify-center mb-10 max-md:text-xl, max-sm:text-base'>
            Back-End Frameworks & Environments
          </h3>
          <div className='flex flex-row gap-20 items-center mb-10 max-sm:flex-col'>
            {[SiNodedotjs, SiExpress].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: 'spring', stiffness: 50 }}
              >
                <Icon className='icon' />
              </motion.div>
            ))}
          </div>
          <h3 className='uppercase text-2xl mb-10 max-md:text-xl, max-sm:text-base'>
            Databases
          </h3>
          <div className='flex flex-row gap-20 items-center mb-10 max-sm:flex-col'>
            {[SiMongodb, SiPostgresql].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: 'spring', stiffness: 50 }}
              >
                <Icon className='icon' />
              </motion.div>
            ))}
          </div>
          <h3 className='uppercase text-center text-2xl mb-10 max-md:text-xl, max-sm:text-base'>
            Testing Frameworks
          </h3>
          <div className='flex flex-row gap-20 items-center mb-10 max-sm:flex-col'>
            {[SiVitest].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: 'spring', stiffness: 50 }}
              >
                <Icon className='icon' />
              </motion.div>
            ))}
          </div>
          <h3 className='uppercase text-center text-2xl mb-10 max-md:text-xl, max-sm:text-base'>
            Version Control & Collaboration
          </h3>
          <div className='flex flex-row gap-20 items-center mb-10 max-sm:flex-col'>
            {[SiGithub, SiGit].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: 'spring', stiffness: 50 }}
              >
                <Icon className='icon' />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default Skills;
