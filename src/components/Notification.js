import "./Notification.css";

export default function Notification({resetGameProp, turnsProp, gameState}) {
    const handleClick = () => {
        resetGameProp();
        console.log(gameState)
    }

    return (
        <div className="notification-box">
            <div className="status-text">
                <div className="won-text">Congratulations, you won! <br/>It took you {turnsProp} turns.</div>
                <div className="lost-text">Oops, you lost. <br/> You ran out of turns.</div>
            </div>
            <button onClick={handleClick} className="new-game">New Game</button>
        </div>
    )
}
