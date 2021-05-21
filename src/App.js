import React from "react";
import Navbar from "./components/NavBar";
import SearchCatsForm from "./components/SearchCatsForm";
import CatsList from "./components/CatsList";

function App() {

  const catsData = [
    {
      id: "0XYvRd7oD",
      title: "abys",
      url: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
      description:
        "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
      favorite: false,
    },
    {
      id: "JFPROfGtQ",
      title: "asho",
      url: "https://cdn2.thecatapi.com/images/JFPROfGtQ.jpg",
      description:
        "The American Shorthair is known for its longevity, robust health, good looks, sweet personality, and amiability with children, dogs, and other pets.",
      favorite: true,
    },
  ];

  return (
    <div className="">
      <Navbar />
      <SearchCatsForm />
      <CatsList items={catsData}/>
    </div>
  );
}

export default App;