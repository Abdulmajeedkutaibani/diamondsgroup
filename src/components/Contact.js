import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// import contact data
import { contact } from '../data';
// import { ContactMap } from './ContactMap';

let schema = yup.object().shape({
  from_name: yup.string().required().min(1),
  email: yup.string().email().min(1),
  message: yup.string().required().min(1),
});
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_yfzjwkg',
        'template_jnjk2yi',
        form.current,
        'n2hKmN1fiWtwJWwJd'
      )
      .then(
        (result) => {
          console.log(result.text);

          reset();
        },
        (error) => {
          console.log(error.text);
          console.log(errors);
        }
      );
  };
  const onSubmit = (data) => console.log(data);

  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            Contact Us
          </h2>
          <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <div className='flex flex-col-reverse lg:gap-x-8 lg:flex-row'>
          <div className='w-full h-96 rounded-lg relative'>
            {/* <ContactMap /> */}
          </div>
          <div className='flex flex-1 flex-col items-start space-y-8 mb-12 mt-12 lg:mb-0 lg:pt-2 lg:text-left '>
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div
                  className='flex flex-col lg:flex-row gap-x-4 w-full items-center text-center'
                  key={index}
                >
                  <div className='text-accent rounded-sm w-14 h-14 flex lg:items-start mt-2 mb-4 lg:mb-0 text-2xl items-center justify-center lg:justify-start'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-accent font-normal '>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            className='space-y-8 w-full max-w-[780px] '
            onSubmit={(handleSubmit(onSubmit), sendEmail)}
            ref={form}
          >
            <div className='flex gap-2'>
              <input
                className='input'
                type='text'
                placeholder='Your name'
                name='from_name'
                {...register('from_name')}
                required
              />
              <p>{errors.from_name?.message}</p>
              <input
                className='input'
                type='email'
                placeholder='Your email'
                name='email'
                {...register('email')}
                required
              />
              <p>{errors.email?.message}</p>
            </div>

            <textarea
              className='textarea'
              placeholder='Your message'
              name='message'
              {...register('message')}
            ></textarea>
            <button
              type='submit'
              value='send'
              className='btn btn-lg bg-accent hover:bg-secondary-hover mx-auto lg:mx-0'
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
