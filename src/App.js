import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

const cardsImages = [
  { src: "/icons/001.png", isMatched: false },
  { src: "/icons/002.png", isMatched: false },
  { src: "/icons/003.png", isMatched: false },
  { src: "/icons/004.png", isMatched: false },
  { src: "/icons/005.png", isMatched: false },
  { src: "/icons/006.png", isMatched: false },
  { src: "/icons/007.png", isMatched: false },
  { src: "/icons/008.png", isMatched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstCard, setFirstChoice] = useState(null);
  const [secondCard, setSecondChoice] = useState(null);
  const [disabledState, setDisabledState] = useState(false);
  const [gameOverState, setGameOverState] = useState(false);

  const resetGame = () => {
    const updatedCards = [...cardsImages, ...cardsImages].sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(updatedCards);
    setFirstChoice(null);
    setSecondChoice(null);
    setTurns(0);;
  };

  const setChoice = (card) => {
    firstCard ? setSecondChoice(card) : setFirstChoice(card);
  }

  const updateTurns = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurns(turn => turn + 1);
    setDisabledState(false);
  }

  const updateGameState = () => {
    turns === 39 ? setGameOverState(true) : setGameOverState(false);
    // turns === 2 ? console.log('game over') : console.log(turns);
  }

  useEffect(() => {
    if (firstCard && secondCard) {
      setDisabledState(true);
      if (firstCard.src === secondCard.src) {
        setCards(cards => {
          return cards.map(card => {
            if (card.src === firstCard.src) {
              return {...card, isMatched: true}
            } else return card
          })
        });
        setTimeout(() => {
          updateTurns();
          updateGameState();
        }, 500);
      } else {
        setTimeout(() => {
          updateTurns();
          updateGameState();
        }, 500);
      }
    }
  }, [firstCard, secondCard])

  return (
    <div className="App">
      <header>memory</header>
      <button onClick={resetGame}>new game</button>
      <div className="main-grid">
        <div className="count-text">Turns spent<br/><span className="count"> {turns} </span></div>
        <div className="cards-grid">
          {cards.map((card) => (
            <Card key={card.id} cardProp={card} setChoiceProp={setChoice} flippedProp={card === firstCard || card === secondCard} matchedProp = {card.isMatched} disabledProp = {disabledState}/>
          ))}
        </div>
        <div className="count-text">Turns left<br/><span className="count"> {`${40 - turns}`}</span></div>
      </div>
    </div>
  );
}

export default App;
