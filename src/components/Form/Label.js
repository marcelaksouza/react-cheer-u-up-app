import React from "react";

const Label = (props) => {
  return (
    <label className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">
    {props.children}
  </label>
  );
};

export default Label;