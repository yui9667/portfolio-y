import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Button } from '@material-tailwind/react';
import './Contact.css';
import Footer from '../Footer/Footer';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qm942d9', 'template_ncwn83a', form.current, {
        publicKey: 'p4mQfOb8Qqou5Q80d',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Successfully send!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('It failed to sent it. Please try again!');
        }
      );
  };
  return (
    <div className='mt-20 ' id='contact'>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className='text-6xl mt-20 text-center text-bold tracking-wider relative max-md:text-5xl'
        style={{ fontFamily: ' Bebas Neue' }}
      >
        Contact
        <motion.div
          className=' h-1 m-auto right-0 left-0  absolute'
          style={{ backgroundColor: 'var(--btn-color' }}
          initial={{ width: 0 }}
          animate={{ width: '20%' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 5, ease: 'easeInOut' }}
        />
      </motion.h2>
      <section className='flex flex-col items-center justify-center '>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className='flex flex-col p-5 mt-10 rounded w-[32rem] shadow-lg border-4 mb-20 contact-form'
          style={{ backgroundColor: 'var(--contact-form-color)' }}
        >
          <label>Name</label>
          <input
            className='py-2 rounded-sm mb-3 pr-2 tracking-wider'
            type='text'
            name='user_name'
            style={{ color: '#5b3e70' }}
            required
          />
          <label>Email</label>
          <input
            className='py-3 rounded-sm mb-3 tracking-wider'
            type='email'
            name='user_email'
            style={{ color: '#5b3e70' }}
            required
          />
          <label>Message</label>
          <textarea
            name='message '
            className='pb-20 rounded-sm mb-3 tracking-wider'
            style={{ color: '#5b3e70' }}
            required
          />

          <Button
            type='submit'
            value='Send'
            className='rounded mt-8 py-2 shadow-lg max-md:text-sm'
            style={{ backgroundColor: 'var(--btn-color)' }}
          >
            Send
          </Button>
        </motion.form>
      </section>
      <Footer />
    </div>
  );
};
export default Contact;
