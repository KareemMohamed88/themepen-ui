import React from "react";

const profile = ({
  profilePicture,
  picture,
  firstName,
  track,
  description,
  date,
}) => {
  return (
    <div className="h-full">
      <header className="relative mb-12">
        <img className="h-56 w-full rounded-xl" src={profilePicture} alt="" />
        <img
          className="w-16 h-16 rounded-full absolute -bottom-8 left-5 border-4 border-white"
          src={picture}
          alt=""
        />
      </header>
      <main className="space-y-3">
        <h1 className="text-xl font-medium dark:text-white">{firstName}</h1>
        <p className=" text-slate-500 dark:text-slate-200 font-normal break-all">
          {description}
        </p>
        <div className="w-full border border-slate-100 dark:border-slate-200/20" />
        <p className="text-mainColor dark:text-indigo-400">{track}</p>
        <p className="text-slate-500 font-normal">
          joined in:{" "}
          <time className="text-mainColor font-bold font-sans">
            {date}
          </time>
        </p>
      </main>
    </div>
  );
};

export default profile;
