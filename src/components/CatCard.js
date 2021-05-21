import React from "react";
import fullHeart from "../img/heart2.png";

const CatCard = (props) => {
  return (
    <li>
      <div className="">
        <img className="" src={props.url} alt="Kitty pic"></img>
      </div>

      <div className="">
        <p className="">{props.title}</p>
        <p className="">{props.description}</p>
      </div>

      <div className="">
        <img className="w-10 h-10 m-4" src={fullHeart} alt="Heart pic"></img>
      </div>
    </li>
  );
};

export default CatCard;
