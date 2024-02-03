import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react"
import animationData from "../animation/animation_lnqjraou.json"
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const ContactUs = () => {
  const [state, handleSubmit] = useForm("myyqldpq");
  if (state.succeeded) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Helmet>
          <title>Theme pen contact us</title>
          <meta name="description" content="theme pen contact us" />
        </Helmet>
        <div className="text-center">
          <p className="text-xl font-bold tracking-tight text-slate-300">your problem sent to our team successfully</p>
          <Lottie loop={false} animationData={animationData} style={{ height: 120 }}></Lottie>
          <div className=" flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-mainColor px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    )
  }
  return (
    <React.Fragment>
      <div className="h-12"></div>
      <div className="flex items-center justify-center w-100% h-screen">
        <form className="w-90% md:w-50% lg:w-40%" onSubmit={handleSubmit}>
          <h2 className="text-xl mb-4 md:text-2xl max-[410px]:text-lg max-[380px]:text-base text-slate-800 dark:text-slate-300">
            send email to us if you got any proplem
          </h2>
          <div>
            <div>
              <input
                className="inp w-100% mb-5 pl-4 rounded outline-none text-white"
                type="text"
                name="username"
                placeholder="Full name"
              />
              <ValidationError
                prefix="username"
                field="username"
                errors={state.errors}
              />
            </div>
            <div>
              <input
                className="inp w-100% mb-5  pl-4 rounded outline-none text-white"
                type="text"
                name="name"
                placeholder="Project full name (optional)"
              />
              <ValidationError
                prefix="name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div>
              <input
                className="inp w-100% mb-5 pl-4 rounded outline-none text-white"
                type="email"
                name="email"
                placeholder="Email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div>
            <textarea
              className="inp w-100% h-60 p-4 rounded outline-none text-white"
              name="Message"
              placeholder="Your proplem"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button id="submitRequest" disabled={state.submitting} className='mt-3 bg-mainColor px-5 py-2.5 text-white font-bold rounded'>
            Send now
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
