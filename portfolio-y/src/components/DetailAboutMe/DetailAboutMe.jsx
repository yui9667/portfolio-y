import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';

import './DetailAboutMe.css';
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
  SiMysql,
  SiGithub,
  SiGit,
} from 'react-icons/si';
const DetailAboutMe = () => {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className='text-6xl mt-20 text-center text-bold tracking-wider relative max-md:text-5xl'
        style={{ fontFamily: ' Bebas Neue' }}
      >
        About Me
        <motion.div
          className=' right-0 left-0 h-1 m-auto absolute'
          style={{ backgroundColor: 'var(--btn-color)' }}
          initial={{ width: 0 }}
          animate={{ width: '20%' }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 5, ease: 'easeInOut' }}
        />
      </motion.h2>
      <motion.section
        className='flex flex-col justify-center items-center gap-20'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img
          src='../../../src/assets/detailAboutMe.png'
          alt='profile'
          className='profile-image'
        />
        <div className=' p-10 rounded shadow-lg detail-aboutme-container  max-sm:p-5 max-sm:text-sm'>
          <h3>About Myself</h3>
          <p className='tracking-wide '>
            I am Japanese and have a passion for exploring and trying new
            things. I have lived in Canada, and Denmark and am settling down in
            Sweden. I thrive on stepping out of my comfort zone and constantly
            pursuing new challenges. I love playing the drums and recently
            started learning to dance, which has been an exciting new journey
            for me. Coding became a hobby I discovered after moving to Sweden. I
            enjoy it because it allows me to continuously learn and grow,
            especially in an ever-evolving field like IT. I began studying UX
            design through an online platform called Coursera, which sparked my
            interest in front-end development. It is incredibly exciting to
            create websites and bring ideas to life using code, especially with
            tools like JavaScript. I recently completed a Back-End Development
            course inFolkhögskola and am now working towards becoming a
            full-stack developer. However, my main focus and passion lie in
            front-end development, where I aim to specialize and excel.
          </p>
        </div>
      </motion.section>
      <section>
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
          <div className='mb-10 max-sm:flex-col'>
            {[SiReact].map((Icon, index) => (
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
            {[SiMongodb, SiMysql].map((Icon, index) => (
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
    </div>
  );
};

export default DetailAboutMe;
