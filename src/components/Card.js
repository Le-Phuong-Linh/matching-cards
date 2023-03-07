import './Card.css';

export default function Card( { cardProp, setChoiceProp } ) {

  const setChoice = () => {
    setChoiceProp(cardProp)
  }

    return(
        <div className="card">
        <div>
          <img
            className="card-image"
            src={cardProp.src}
            alt="card-icon"
          ></img>
          <div className="cover" onClick={setChoice}></div>
        </div>
      </div>
    )
}