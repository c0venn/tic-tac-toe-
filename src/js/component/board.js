import React from "react";
import { useState } from "react";

function Board(props) {
	let [game, setGame] = useState(["", "", "", "", "", "", "", "", ""]);

	let [winner, setWinner] = useState(false);
	let [turn, setTurn] = useState(true);

	const handlePlay = key => {
		if (game[key] !== "") return;
		let updatedGame = game.map((item, itemNumber) => {
			if (itemNumber === key) {
				if (turn) return "X";
				else return "O";
			}
			return item;
		});
		setGame(updatedGame);
		howtowin(updatedGame);
	};

	const reset = () => {
		setGame(["", "", "", "", "", "", "", "", ""]);
		setTurn(true);
		setWinner(false);
	};

	const howtowin = game => {
		// validations
		let win = false;
		if (
			game[0] === game[1] &&
			game[0] === game[2] &&
			(game[0] === "X" || game[0] === "O")
		)
			win = true;
		else if (
			game[3] === game[4] &&
			game[3] === game[5] &&
			(game[3] === "X" || game[3] === "O")
		)
			win = true;
		else if (
			game[6] === game[7] &&
			game[6] === game[8] &&
			(game[6] === "X" || game[6] === "O")
		)
			win = true;
		else if (
			game[0] === game[3] &&
			game[0] === game[6] &&
			(game[0] === "X" || game[0] === "O")
		)
			win = true;
		else if (
			game[1] === game[4] &&
			game[1] === game[7] &&
			(game[1] === "X" || game[1] === "O")
		)
			win = true;
		else if (
			game[2] === game[5] &&
			game[2] === game[7] &&
			(game[2] === "X" || game[2] === "O")
		)
			win = true;
		else if (
			game[0] === game[4] &&
			game[0] === game[8] &&
			(game[0] === "X" || game[0] === "O")
		)
			win = true;
		else if (
			game[2] === game[4] &&
			game[2] === game[6] &&
			(game[2] === "X" || game[2] === "O")
		)
			win = true;

		if (win == true) {
			turn
				? setWinner(props.players.player1)
				: setWinner(props.players.player2);
		}
	};

	return (
		<div>
			{winner ? (
				<h2>{winner} win!</h2>
			) : (
				<h2 className="turn">
					{turn ? props.players.player1 : props.players.player2} turns
				</h2>
			)}
			{game.map((item, key) => {
				return (
					<div
						className={`item item${key}`}
						key={key}
						onClick={() => handlePlay(key)}>
						{item}
					</div>
				);
			})}
			<button className="reset-button" onClick={reset}>
				Play Again!
			</button>
		</div>
	);
}

export default Board;
