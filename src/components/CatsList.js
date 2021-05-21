import React from "react";
import CatCard from "./CatCard";

const CatsList = (props) => {
  console.log(props.items);
  
  return (
    <ul className="">
      {props.items.map((cat) => (
        <CatCard
          title={cat.title}
          url={cat.url}
          description={cat.description}
        />
      ))}
    </ul>
  );
};

export default CatsList;
