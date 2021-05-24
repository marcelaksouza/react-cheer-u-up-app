import React from "react";
import fullHeart from "../../img/heart2.png";

const LikeButton = () => {
    return(
    <div className="w-full flex justify-center bg-red-200 hover:bg-red-300 hover:rounded shadow border border-red-200">
      <img className="p-2 h-1/6 w-1/6" src={fullHeart} alt="Heart pic"></img>
    </div>
  );
};

export default LikeButton;
