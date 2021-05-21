import React from "react";
import LogoCat from "../img/logoCat.png";

const NavBar = () => {
  return (
    <div className="flex items-center p-6 bg-red-300">
      <img className="h-12" src={LogoCat} alt="logo"></img>
      <p className="pl-6 text-white text-2xl">Cheer U Up App</p>
    </div>
  );
};

export default NavBar;
