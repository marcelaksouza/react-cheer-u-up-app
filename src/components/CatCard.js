import React from "react";
import fullHeart from "../img/heart2.png";

const CatCard = (props) => {
  return ( 
    <div className="border border-pink-100 p-2 rounded overflow-hidden shadow-md w-80 h-92 relative m-6 bg-pink-100">
      <li>
        <div className="flex justify-center">
          <img
            className="h-52 w-80 object-cover rounded"
            src={props.url}
            alt="Kitty pic"
          ></img>
        </div>

        <div className="">
          <div className="m-2 p-2 h-32 overflow-hidden">
            <span className="flex justify-center capitalize font-bold text-gray-800">{props.title}</span>
            <span className="block text-justify text-gray-600 line-clamp-4">{props.description}</span>
          </div>

          <div className=" flex justify-center bg-red-200 hover:bg-red-300 hover:rounded shadow border border-red-200">
            <img
              className="w-10 h-10 m-4"
              src={fullHeart}
              alt="Heart pic"
            ></img>
          </div>

        </div>
      </li>
    </div>
  );
};

export default CatCard;
