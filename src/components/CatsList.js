import React from "react";
import CatCard from "./CatCard/CatCard";

const CatsList = (props) => {
  console.log(props.items);

  return (
    <ul className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
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
