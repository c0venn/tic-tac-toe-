import React from "react";

function Player(props) {
	let player1 = "";
	let player2 = "";

	const setPlayer1 = e => {
		player1 = e.target.value;
	};

	const setPlayer2 = e => {
		player2 = e.target.value;
	};

	const Game = e => {
		if (player1 === "" || player2 === "") return;
		props.setPlayer({ player1: player1, player2: player2 });
	};

	return (
		<div className="menu">
			<h2>Who wants play?</h2>
			<div>
				<input
					type="text"
					id="playerOne"
					placeholder="Insert name"
					onChange={setPlayer1}
				/>
				<input
					type="text"
					id="playerTwo"
					placeholder="Insert name"
					onChange={setPlayer2}
				/>
			</div>
			<div>
				<div type="button" className="Play" onClick={Game}>
					play!
				</div>
			</div>
		</div>
	);
}

export default Player;
