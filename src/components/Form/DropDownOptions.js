import React from "react";
const style =
  "drop-shadow-sm block appearance-none w-full border border-red-300 text-gray-700 py-3 px-4 mb-3 rounded leading-tight focus:outline-none";

const DropDownOptions = (props) => {
  return (
    <select className={style}>
      {props.list.map((item) => (
        <option>{item}</option>
      ))}
    </select>
  );
};

export default DropDownOptions;
