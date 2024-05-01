export default function GameOver({haswinner,onRematch}){
    return(
        <div id="game-over">
            <h2>Game Over!</h2>
            {haswinner && <p>{haswinner} won</p>}
            {!haswinner && <p>It &apos;s a Draw!</p>}
            <button onClick={onRematch}>Rematch!</button>
        </div>
    );
}