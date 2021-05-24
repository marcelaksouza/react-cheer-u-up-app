import React from "react";
import Navbar from "./components/NavBar";
import SearchCatsForm from "./components/SearchCatsForm";
import CatsList from "./components/CatsList";

function App() {
  const catsData = [
    {
      id: "1",
      title: "asho",
      url: "https://cdn2.thecatapi.com/images/JFPROfGtQ.jpg",
      description:
        "The American Shorthair is known for its longevity, robust health, good looks, sweet personality, and amiability with children, dogs, and other pets.",
      favorite: true,
    },
    {
      id: "2",
      title: "abys",
      url: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
      description:
        "The American Shorthair is known for its longevity, robust health, good looks, sweet personality, and amiability with children, dogs, and other pets. The American Shorthair is known for its longevity, robust health, good looks, sweet personality, and amiability with children, dogs, and other pets.The American Shorthair is known for its longevity, robust health, good looks, sweet personality, and amiability with children, dogs, and other pets.",
      favorite: false,
    },
    {
      id: "3",
      title: "asho",
      url: "https://cdn2.thecatapi.com/images/JFPROfGtQ.jpg",
      description:
        "The American Shorthair is known for its longevity, robust health, good looks, sweet personality, and amiability with children, dogs, and other pets.",
      favorite: true,
    },
    {
      id: "4",
      title: "abys",
      url: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
      description:
        "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
      favorite: false,
    },
  ];

  return (
    <div className="">
      <Navbar />

      <div className="">
        <div className="bg-blue-300 w-full ">
          <SearchCatsForm />
        </div>
        
        <div className="bg-yellow-300 w-full overflow-hidden ">
          <CatsList items={catsData} />
        </div>
      </div>
    </div>
  );
}

export default App;
