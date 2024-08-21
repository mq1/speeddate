// SPDX-FileCopyrightText: 2024 Manuel Quarneti <manuelquarneti@protonmail.com>
// SPDX-License-Identifier: GPL-3.0-only

// dumpster fire of unoptimized code
// hoping it doesn't crash the browser with small numbers

const genCouples = (peopleCount: number) => {
	const people = Array.from({ length: peopleCount }, (_, i) => i + 1);

	const couples = people.flatMap((person, i) =>
		people.slice(i + 1).map((partner) => [person, partner]),
	);

	return couples;
};

const genRandomMatrix = (couples: number[][]) => {
	let matrix: number[][][] = [];

	// fill the matrix with empty arrays
	// this is a mess
	for (let i = 0; i < 100; i++) {
		matrix.push([]);
	}

	// shuffle couples
	couples.sort(() => Math.random() - 0.5);

	for (const couple of couples) {
		for (let i = 0; ; i++) {
			let present = false;

			for (const [a, b] of matrix[i]) {
				if (
					a === couple[0] ||
					a === couple[1] ||
					b === couple[0] ||
					b === couple[1]
				) {
					present = true;
					break;
				}
			}

			if (!present) {
				matrix[i].push(couple);
				break;
			}
		}
	}

	// remove empty arrays
	matrix = matrix.filter((array) => array.length > 0);

	return matrix;
};

export const getMatrix = (peopleCount: number) => {
	if (peopleCount === null) {
		return [];
	}

	// generate couples
	const couples = genCouples(peopleCount);

	// generate a matrix until length == n-1
	let matrix = genRandomMatrix(couples);

	// return if n is odd
	if (peopleCount % 2 !== 0) {
		return matrix;
	}

	while (matrix.length !== peopleCount - 1) {
		matrix = genRandomMatrix(couples);
	}

	return matrix;
};
