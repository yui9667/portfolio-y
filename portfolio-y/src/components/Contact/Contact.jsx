import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Button } from '@material-tailwind/react';

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
    <>
      <section className='flex flex-col items-center justify-center mt-20'>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className='flex flex-col bg-amber-100 p-20 mt-20'
        >
          <label>Name</label>
          <input
            className='px-20 py-1 rounded-sm mb-3'
            type='text'
            name='user_name'
          />
          <label>Email</label>
          <input
            className='py-1 rounded-sm mb-3'
            type='email'
            name='user_email'
          />
          <label>Message</label>
          <textarea name='message ' className='py-20 rounded-sm mb-3' />
          <input
            type='submit'
            value='Send'
            className=' py-1 text-white rounded-sm transition ease-in-out delay-100 bg-[#AE5CF2] text-base rounded px-5  tracking-wide drop-shadow-lg hover:-translate-y-1 hover:scale-110  hover:bg-amber-700 duration-300 ...'
          />
        </motion.form>
      </section>
    </>
  );
};
export default Contact;
