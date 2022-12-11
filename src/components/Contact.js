// import React from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// toast
import toast from 'react-hot-toast';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message Sent');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-4 py-16 md:py-32 md:px-16 mx-auto rounded-lg md:grid-cols-2 lg:px-16 xl:px-32">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-highlighter">
            Get In Touch
          </h2>
          <div className="text-grayish-blue">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </div>
        </div>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        noValidate=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div>
          <label htmlFor="user_name" className="text-sm text-grayish-blue">
            Full name
          </label>
          <input
            id="user_name"
            name="user_name"
            type="text"
            required
            placeholder=""
            className="w-full p-3 rounded bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="user_email" className="text-sm text-grayish-blue">
            Email
          </label>
          <input
            id="user_email"
            name="user_email"
            type="email"
            required
            className="w-full p-3 rounded bg-gray-100"
            data-temp-mail-org="1"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm text-grayish-blue">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="3"
            className="w-full p-3 rounded bg-gray-100"
          ></textarea>
        </div>
        <button
          type="submit"
          className=" my-3 px-4 py-3 text-lg text-grayish-blue transition-colors transform duration-500 border border-primary hover:text-primary "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
