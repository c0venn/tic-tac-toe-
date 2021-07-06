import React from "react";
import { useState } from "react";
import Player from "./players";
import Board from "./board";

export function Home() {
	let [players, setPlayer] = useState(false);

	return (
		<div className="app">
			<h1>Tic Tac Toe</h1>
			{!players ? (
				<Player setPlayer={setPlayer} />
			) : (
				<Board players={players} />
			)}
		</div>
	);
}
