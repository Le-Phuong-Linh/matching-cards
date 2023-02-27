import { useState } from "react";
import "./App.css";

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

  const resetGame = () => {
    const duplicatedCards = [...cardsImages, ...cardsImages];
    const shuffledCards = duplicatedCards
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

      setCards(shuffledCards);
      setTurns(0);

      console.log(cards, turns);
  };

  return (
    <div className="App">
      <header>memory</header>
      <button onClick={resetGame}>new game</button>
    </div>
  );
}

export default App;
