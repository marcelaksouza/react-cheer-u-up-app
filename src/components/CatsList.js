import React from "react";
import CatCard from "./CatCard";

const CatsList = (props) => {
  console.log(props.items);

  return (
    <ul className="grid grid-cols-3">
      {props.items.map((cat) => (
        <CatCard
          key={cat.id}
          title={cat.title}
          url={cat.url}
          description={cat.description}
        />
      ))}
    </ul>
  );
};

export default CatsList;
