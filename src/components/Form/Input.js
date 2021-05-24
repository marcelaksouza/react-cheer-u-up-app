import React from "react";
const style = "appearance-none block w-full text-gray-700 border border-red-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"


const Input = (props) => {
  return (
    <input
      className={style}
      type="text"      
    />
  );
};

export default Input;
