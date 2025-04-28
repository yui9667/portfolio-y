import { motion } from 'framer-motion';
import DetailAboutMeProfile from '../../assets/detailAboutMe6.png';
import './DetailAboutMe.css';
import Skills from '../Skills/Skills';
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
          src={DetailAboutMeProfile}
          alt='profile'
          className='profile-image '
        />
        <div className=' p-10 rounded shadow-lg detail-aboutme-container  max-sm:p-5 max-sm:text-sm'>
          <h3>About Myself</h3>
          <p className='tracking-wide '>
            I am Japanese and have a passion for exploring and trying new
            things. I have lived in Canada, Denmark and am settling down in
            Sweden. I thrive on stepping out of my comfort zone and constantly
            pursuing new challenges. I love playing the drums and recently
            started learning to dance, which has been an exciting new journey
            for me. Coding became a hobby I discovered after moving to Sweden. I
            enjoy it because it allows me to continuously learn and grow,
            especially in an ever-evolving field like IT. I began studying UX
            design through an online platform called Coursera, which sparked my
            interest in frontend development. It is incredibly exciting to
            create websites and bring ideas to life using code, especially with
            tools like JavaScript. I recently completed a Backend Development
            course in Folkhögskola and am now working towards becoming a
            full-stack developer.
          </p>
        </div>
      </motion.section>
      <Skills />
    </div>
  );
};

export default DetailAboutMe;
