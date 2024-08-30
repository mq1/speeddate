// SPDX-FileCopyrightText: 2024 Manuel Quarneti <manuelquarneti@protonmail.com>
// SPDX-License-Identifier: GPL-3.0-only


const robin = (numPlayers) => {
	// If the number of players is odd, add a dummy player
	const players = Array.from({ length: numPlayers }, (_, i) => i + 1);
	if (numPlayers % 2 !== 0) {
		players.push(null); // Dummy player
	}

	const rounds = [];
	const totalRounds = players.length - 1;

	for (let round = 0; round < totalRounds; round++) {
		const matches = [];
		for (let i = 0; i < players.length / 2; i++) {
			const home = players[i];
			const away = players[players.length - 1 - i];
			if (home !== null && away !== null) {
				matches.push([home, away]);
			}
		}
		rounds.push(matches);

		// Rotate the players, keeping the first player fixed
		const lastPlayer = players.pop();
		players.splice(1, 0, lastPlayer);
	}

	return rounds;
};

const updateTable = () => {
	const people = document.getElementById("people").value;
	const matrix = robin(people);

	const table = document.getElementById("table");
	table.innerHTML = "";
	for (const round of matrix) {
		const row = document.createElement("tr");
		for (const couple of round) {
			const cell = document.createElement("td");
			const kbd = document.createElement("kbd");
			kbd.textContent = couple;
			cell.appendChild(kbd);
			row.appendChild(cell);
		}
		table.appendChild(row);
	}

	document.getElementById("5min").textContent = matrix.length * 5;
	document.getElementById("10min").textContent = matrix.length * 10;
};

document.getElementById("people").addEventListener("input", updateTable);
updateTable();
