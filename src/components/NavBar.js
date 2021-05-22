import React from "react";
import LogoCat from "../img/logoCat.png";

const NavBar = () => {
  return (
    <div className="flex items-center p-6 bg-red-300">
      <img className="h-14" src={LogoCat} alt="logo"></img>
      <span className="block pl-6 text-white text-2xl">Cheer U Up App</span>
    </div>
  );
};

export default NavBar;
