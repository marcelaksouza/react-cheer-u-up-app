import CardWrap from './components/CardWrap'
import LogoCat from './img/logoCat.png'


function App() {

  const cats = [
    {
      id: '0XYvRd7oD',
      title: 'abys',
      url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
      description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
      favorite: false
    },
    { 
      id: 'JFPROfGtQ', 
      title: 'asho', 
      url: 'https://cdn2.thecatapi.com/images/JFPROfGtQ.jpg',
      description: "The American Shorthair is known for its longevity, robust health, good looks, sweet personality, and amiability with children, dogs, and other pets.",
      favorite: true  
    }
  ];

  //did not test this function yet
  // const buildCards = (cats) => {
  //   cats.map(cat => {
  //     return (<CardWrap 
  //     id = {cat.id}
  //     url = {cat.url}
  //     title = {cat.title}
  //     description = {cat.description}
  //     />)
  //   })
  // }


  return (
    <div className='bg-gray-100'>
      <div className='flex items-center p-6 bg-red-300'>
      <img className='h-10' src={LogoCat} alt='logo'></img>
      <p className='pl-6'>Cheer U Up App</p>
      </div>

      <div classname='grid grid-cols-3 gap-4 justify-items-center h-48'>
        <CardWrap
        
        title={cats[0].title}
        url={cats[0].url}
        description={cats[0].description}
        favorite={cats[0].favorite}
      />
      <CardWrap
        title={cats[1].title}
        url={cats[1].url}
        description={cats[1].description}
        favorite={cats[1].favorite}
      />
      </div>
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