import React from "react";
import Intro from "./Intro";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className=" h-screen bg-slate-400 ">
      <Intro />
      <Skills />
    </div>
  );
};

export default Home;
