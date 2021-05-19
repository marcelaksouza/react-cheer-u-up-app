import emptHeart from "../img/heart1.png";
import fullHeart from "../img/heart2.png";

const isFavorite = (cat) =>{
    return (cat ? fullHeart : emptHeart);
}

// const tagleFavorite = (bool) => {
//     return !bool;
// }

function CardWrap(props) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-8">
      <img className="mr-4" src={props.url} alt="Kitty pic"></img>
      <div className="px-4 py-4 text-center">
        <div className="font-bold text-xl mb-2 ">{props.title}</div>
        <p className="text-grey-darker">{props.description}</p>
      </div>
      <div className="">
        <img className="w-10 h-10 m-4" src={fullHeart} alt="Heart pic"></img>
      </div>
    </div>
  );
}

export default CardWrap;
