import React from "react";
// import CardWrap from "./components/UI/CardWrap";
import Navbar from "./components/NavBar";
import  SearchCatsForm from './components/SearchCatsForm'

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
    </div>
  );
}

export default App;

//build cards from a array
// const buildCardDiv = (cats) => {
//     let catDisplay = "";
//     catDisplay += `<div class="card-columns">`;

//     cats.forEach(cat => {
//         catDisplay += `<div class="card">`;
//         catDisplay += `<img src=" ${cat.url}" class="img-fluid" alt="kitty pic" onclick="openModalfunction('${cat.id}')">`;
//         catDisplay += `<div id="heartDivId-${cat.id}" class="heart">`;
//         catDisplay += `<img id="catImgId-${cat.id}" src="frontend/img/heart1.png" onclick="favoriteFunc('${cat.id}')" width="30" height="30" class="d-inline-block align-top" alt="blankHeart">`
//         catDisplay += `</div>`;
//         catDisplay += `</div>`;
//     });
//     catDisplay += `</div>`;

//     displayDiv.innerHTML = catDisplay;
// }
// {/* <CardWrap

//         title={catsData[0].title}
//         url={catsData[0].url}
//         description={catsData[0].description}
//         favorite={catsData[0].favorite}
//       />
//       <CardWrap
//         title={catsData[1].title}
//         url={catsData[1].url}
//         description={catsData[1].description}
//         favorite={catsData[1].favorite}
//       /> */}
