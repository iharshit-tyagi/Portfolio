import React from "react";

const Intro = () => {
  return (
    <div className=" pt-7 w-3/4 pl-6">
      <h2 className="text-green-400 text-3xl font-semibold  ">👋🏽 Hi,I am</h2>
      <h2 className="text-white text-5xl font-bold">
        Harshit Tyagi
        <span className="text-gray-400 text-2xl font-semibold block">
          I speak in
          <span className="text-orange-400">{" <code />"}</span> so you don't
          have to
        </span>
      </h2>
      <p className="text-gray-400 pt-9 text-xl">
        I'm your friendly neighborhood <span>Full-Stack Developer </span>.
        Helping people turn their ideas into sites & apps that work.
      </p>
    </div>
  );
};

export default Intro;
