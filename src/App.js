import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

const cardsImages = [
  { src: "/icons/001.png" },
  { src: "/icons/002.png" },
  { src: "/icons/003.png" },
  { src: "/icons/004.png" },
  { src: "/icons/005.png" },
  { src: "/icons/006.png" },
  { src: "/icons/007.png" },
  { src: "/icons/008.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstCard, setFirstChoice] = useState(null);
  const [secondCard, setSecondChoice] = useState(null);

  const resetGame = () => {
    const duplicatedCards = [...cardsImages, ...cardsImages];
    const shuffledCards = duplicatedCards
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  const setChoice = (card) => {
    firstCard ? setSecondChoice(card) : setFirstChoice(card);
  }

  const updateTurns = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurns(turn => turn + 1)
  }

  useEffect(() => {
    if (firstCard && secondCard) {
      firstCard.src === secondCard.src ? console.log('cards match') : console.log('cards do not match');
      updateTurns();
    }
  }, [firstCard, secondCard])

  return (
    <div className="App">
      <header>memory</header>
      <button onClick={resetGame}>new game</button>
      <div className="main-grid">
        <div className="count-text">Turns spent<span className="count"> {turns} </span></div>
        <div className="cards-grid">
          {cards.map((card) => (
            <Card key={card.id} cardProp={card} setChoiceProp={setChoice} />
          ))}
        </div>
        <div className="count-text">Turns left<span className="count"> {`${40-turns}`}</span></div>
      </div>
    </div>
  );
}

export default App;
