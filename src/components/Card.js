import "./Card.css";

export default function Card({ cardProp, setChoiceProp, flippedProp, matchedProp, disabledProp }) {
  const handleClick = () => {
    if (!disabledProp) {
      setChoiceProp(cardProp);
    }
  };

  return (
    <div className="card">
      <div className={flippedProp ? "flipped" : ""}>
      <div className={matchedProp ? "matched" : ""}>
        <img className="card-image" src={cardProp.src} alt="card-icon"></img>
        <div className="cover" onClick={handleClick}></div>
      </div>
      </div>
    </div>
  );
}
