import './Card.css';

export default function Card( { cardProp, setChoiceProp, flippedProp } ) {

  const handleClick = () => {
    setChoiceProp(cardProp);
  }

    return(
        <div className="card">
        <div className="flipped">
          <img
            className="card-image"
            src={cardProp.src}
            alt="card-icon"
          ></img>
          <div className="cover" onClick={handleClick}></div>
        </div>
      </div>
    )
}