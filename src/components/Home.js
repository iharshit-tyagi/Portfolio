import React from "react";
import Intro from "./Intro";
import Skills from "./Skills";
import ButtonList from "./ButtonList";
const Home = () => {
  return (
    <div className=" h-screens bg-[#020a13] ">
      <Intro />
      <ButtonList />
      <Skills />
    </div>
  );
};

export default Home;
