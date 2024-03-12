"use client"

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
  
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(() => {
        setSuccess(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setError(true);
      });
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-100vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row py-12 px-4 sm:px-8 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-full md:h-full sm-h-1/4  flex items-center justify-center md:text-3xl sm:text-2xl lg:w-1/2 lg:text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-auto sm:w-full sm:gap-4 sm:h-full md:gap-8 md:w-full sm:h-full p-4 md:h-full sm:h-full lg:h-full lg:w-1/2 bg-gray-900 rounded-xl text-xl flex flex-col gap-8 justify-center md:p-8 lg:p-12 xl:p-24"
        >
          <span className="text-sm sm-text-gray-900 lg:text-stone-300">Dear Dragos-Stefan,</span>
          <textarea
            rows={8}
            className="text-stone-300 bg-gray-700 rounded-xl text-sm border-stone-300 outline-none resize-vertical"
            name="user_message"
          />
          <span className="text-sm text-stone-300">My name is:</span>
          <input
            name="user_name"
            type="text"
            className="text-sm bg-transparent border-b-2 border-stone-300 outline-none"
          />
          <span className="text-sm text-stone-300">My email address is:</span>
          <input
            name="user_email"
            type="email"
            className="text-sm bg-transparent border-b-2 border-stone-300 outline-none"
          />
          <span className="text-sm text-stone-300">Regards</span>
          <button className="bg-gray-900 sm:text-stone-300 border-stone-300 rounded font-semibold text-gray-200 p-4 hover:bg-gray-700 hover:text-white">Send</button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
