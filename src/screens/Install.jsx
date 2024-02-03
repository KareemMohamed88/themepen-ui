import React from "react";
import Footer from "./../components/Foot";
import { Helmet } from 'react-helmet-async';

const Install = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>installation</title>
        <meta name="description" content="theme pen learn how to install projects you dawnload from themepen" />
      </Helmet>
      <div className="h-36"></div>
      <div className="w-50% m-auto max-[850px]:w-70% max-[600px]:w-90%">
        <h1 className="text-3xl text-slate-900 dark:text-slate-300">installation:</h1>
        <div className="w-100% h-fit py-5 ">
          <p className="my-5 text-base text-slate-900 dark:text-slate-300">
            After you dawnload project files Click one extract here
          </p>

          <img
            src={require("../assets/Frame 1.png")}
            className="w-40% m-auto max-[600px]:w-60%"
            alt=""
          />
        </div>
        <div className="w-100% h-fit py-5">
          <p className="my-5 text-lg text-slate-900 dark:text-slate-300">Open Visual Studio Code (VScode)</p>
          <p className="my-5 text-lg text-slate-900 dark:text-slate-300">And choose open folder</p>
          <img
            width="100%"
            src={require("../assets/Screenshot (56).png")}
            alt=""
          />
        </div>
        <div className="w-100% h-fit py-5">
          <p className="my-5 text-lg text-slate-900 dark:text-slate-300">
            Choose project files and click select folder
          </p>
          <img
            width="100%"
            src={require("../assets/selectFolder.png")}
            alt=""
          />
        </div>
        <div className="w-100% h-fit py-5 ">
          <p className="my-5 text-lg text-slate-900 dark:text-slate-300">
            Finaly project folder will open succesfully
          </p>
          <img
            width="100%"
            src={require("../assets/Screenshot (60).png")}
            alt=""
          />
        </div>
        <p className="my-10 text-xl text-slate-900 dark:text-slate-300">if yo got any error go to <a className="underline text-mainColor" href="/contact">contact us</a> page</p>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Install;
