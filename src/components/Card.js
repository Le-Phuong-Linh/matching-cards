import './Card.css';

export default function Card( { cardProp, setChoiceProp } ) {

  const handleClick = () => {
    setChoiceProp(cardProp);
  }

    return(
        <div className="card">
        <div>
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