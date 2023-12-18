import React from "react";

const Header = () => {
  return (
    <div className="bg-slate-700">
      <ul className=" pr-7 h-14  pt-2  text-white list-none flex  flex-row justify-end gap-6">
        <li className="text-2xl">Home</li>
        <li className="text-2xl">About</li>
        <li className="text-2xl">Education</li>
        <li className="text-2xl">Contact</li>
        <li className="text-2xl">Portfolio</li>
      </ul>
    </div>
  );
};

export default Header;
