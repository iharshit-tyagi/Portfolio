import React from "react";

const Intro = () => {
  return (
    <div className=" box-border pt-9 flex flex-row justify-between items-center gap-7 ">
      <img
        src="https://prompti.ai/wp-content/uploads/2023/07/pcboi2.png"
        alt="img"
        className="w-60 h-60 rounded-full border-2 border-white "
      />
      <h2 className=" text-2xl font-sans text-white shadow-md">
        Hi there! I'm a Technical Consultant on a mission to transition into the
        exciting world of software development. I'm currently honing my skills
        in Javascript, React, and Tailwind CSS, fueled by a passion for building
        beautiful and interactive user experiences. I'm a quick learner, eager
        collaborator, and always up for a challenge. Let's connect and explore
        how I can bring my unique blend of technical expertise and creative
        vision to your team!
      </h2>
    </div>
  );
};

export default Intro;
