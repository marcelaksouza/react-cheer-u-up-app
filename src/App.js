import Card from './components/Card'

function App() {

  const cats = [
    {
      id: '0XYvRd7oD',
      title: 'abys',
      url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
      description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    },
    { 
      id: 'JFPROfGtQ', 
      title: 'asho', 
      url: 'https://cdn2.thecatapi.com/images/JFPROfGtQ.jpg',
      description: "The American Shorthair is known for its longevity, robust health, good looks, sweet personality, and amiability with children, dogs, and other pets.",  
    }
  ];

  //change to map 
  const buildCards = (cats) => {
    cats.forEach(cat => {
      <Card 
      id = {cat.id}
      url = {cat.url}
      description = {cat.description}
      />
    })
  }


  return (
    <div className='w-full h-screen bg-red-50'>
      <h2>cats api</h2>
      {buildCards(cats)}
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