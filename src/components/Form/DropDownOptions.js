import React, { useState, useEffect } from "react";
const style =
  "drop-shadow-sm block appearance-none w-full border border-red-300 text-gray-700 py-3 px-4 mb-3 rounded leading-tight focus:outline-none";

const DropDownOptions = (props) => {
  const [catsCategoriesList, setCategories] = useState("");

  useEffect(() => {
    const url = "https://api.thecatapi.com/v1/"+props.type
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.API_KEY,
      },
    };
    //fetch cat's category
    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <select className={style}>
      {catsCategoriesList && catsCategoriesList.map((item) => (
        <option key={item.id}>{item.name}</option>
      ))}
    </select>
  );
};

export default DropDownOptions;
