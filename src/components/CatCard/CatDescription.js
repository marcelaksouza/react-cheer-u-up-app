import React from "react";

const CatDescription = (props) => {
  return(
    <div className="p-2 overflow-hidden">
      <span className="flex justify-center capitalize font-bold text-gray-700">
        {props.title}
      </span>
      <span className="block text-justify text-gray-600 line-clamp-4">
        {props.description}
      </span>
    </div>
  );
};

export default CatDescription;
