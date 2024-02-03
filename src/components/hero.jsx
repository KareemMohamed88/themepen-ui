import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from "../components/button";
import ComponentsGrid from "./componentsGrid";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []) 
  return (
    <div className="header py-32  min-h-screen max-h-fit">
      <div className="grid grid-cols-1 md:flex md:justify-between items-center lg:container m-auto px-5 gap-y-14">
        <div className="space-y-6 col-span-1 md:pt-0 w-full z-40 md:w-2/4" data-aos="fade-up">
          <h1 className="md:text-6xl text-4xl max-[360px]:text-3xl text-gray-700 dark:text-gray-100">
            You always must <span className="text-mainColor font-medium">Have Ideas.</span>
          </h1>
          <p className="text-sm md:text-base text-slate-800 dark:text-gray-100">
            <span className="bg-mainColor text-white p-1">Theme Pen</span> is a small global company his goal is sell high
            quality and cheap web templates for other companies or student
            and we have a big collection of <span className="bg-mainColor text-white p-1">web templates</span>
          </p>
          <section>
            <Button name="Learn more" link="#learnmore" />
            <a href="/install" className="ml-3 text-sm font-semibold text-slate-900 dark:text-slate-200">
              installation <span aria-hidden="true">&rarr;</span>
            </a>
          </section>
        </div>
        <ComponentsGrid />
      </div>
    </div>
  )
}

export default Hero