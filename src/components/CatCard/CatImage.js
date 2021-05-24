import React from "react";

const CatImage = (props) => {
  return (
    <div className="w-full">
      <img
        className="h-52 w-80 object-cover rounded"
        src={props.url}
        alt="Kitty pic"
      ></img>
    </div>
  );
};

export default CatImage;
