// import hearts full / empt


function Card(props) {
    return (
        <div className="">
            <div>{props.url}</div>
            <div>{props.description}</div>
            {/* <div>{props.isFavorite}</div> */}
        </div>
    )
}

export default Card;

