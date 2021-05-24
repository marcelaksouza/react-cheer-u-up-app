import React from "react";
import CatCard from "./CatCard/CatCard";

const CatsList = (props) => {
  console.log(props.items);

  return (
    <ul className="p-2 grid sm:grid-cols-3 place-items-center">
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
