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
  
    <div className="rounded overflow-hidden shadow-lg m-8 max-w-xs">
      {/* cat image */}
      <img className="" src={props.url} alt="Kitty pic"></img>
      <div className="p-4 ">
        <div className="font-bold text-xl m-2 text-center">{props.title}</div>
        <p className="text-grey-darker text-justify ">{props.description}</p>
      </div>
      <div className="flex justify-center">
        {/* heart image */}
        <img className="w-10 h-10 m-4" src={fullHeart} alt="Heart pic"></img>
      </div>
    </div>
  );
}

export default CardWrap;
