import "./Notification.css";

export default function Notification({resetGameProp, turnsProp, gameStateProp}) {
    // console.log(gameStateProp);
    const handleClick = () => {
        resetGameProp();
    }

    return (
        <div className={ gameStateProp === "gameWon" || gameStateProp === "gameLost" ? "visible" : "hide"}>
            <div className="notification-box">
                <div className="status-text">
                    <div className={ gameStateProp === "gameWon" ? "visible" : "hide"}>Congratulations, you won! <br/>It took you {turnsProp} turns.</div>
                    <div className={ gameStateProp === "gameLost" ? "visible" : "hide"}>Oops, you lost. <br/> You ran out of turns.</div>
                </div>
                <button onClick={handleClick} className="new-game">New Game</button>
            </div>
        </div>
    )
}
