import React from "react";
import CatImage from "./CatImage";
import CatDescription from "./CatDescription";
import LikeButton from "./LikeButton";

const CatCard = (props) => {
  return (
    <div className="m-4 p-2 border rounded overflow-hidden border-pink-100 shadow-md h-auto bg-pink-100 max-w-xs">
      <li className="">
        <CatImage url={props.url} />

        <div className="">
          <CatDescription title={props.title} description={props.description} />
          <LikeButton />
        </div>
      </li>
    </div>
  );
};

export default CatCard;
