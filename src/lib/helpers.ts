// SPDX-FileCopyrightText: 2024 Manuel Quarneti <manuelquarneti@protonmail.com>
// SPDX-License-Identifier: GPL-3.0-only

// dumpster fire of unoptimized code
// hoping it doesn't crash the browser with small numbers

export const getCouples = (peopleCount: number) => {
  let couples: number[][] = [];

  for (let i = 1; i < peopleCount + 1; i++) {
    for (let j = 1; j < peopleCount + 1; j++) {
      // no singles please
      if (i === j) {
        continue;
      }

      // no duplicates please
      if (couples.find((couple) => couple[0] === j && couple[1] === i)) {
        continue;
      }

      couples.push([i, j]);
    }
  }

  let matrix: number[][][] = [];

  // fill the matrix with empty arrays
  for (let i = 0; i < peopleCount; i++) {
    matrix.push([]);
  }

  couples.forEach((couple) => {
    for (let i = 0; i < peopleCount; i++) {
      let present = false;

      matrix[i].forEach(([a, b]) => {
        if (
          a === couple[0] ||
          a === couple[1] ||
          b === couple[0] ||
          b === couple[1]
        ) {
          present = true;
        }
      });

      if (!present) {
        matrix[i].push(couple);
        break;
      }
    }
  });

  // idk why but when working with powers of 2, the last array is always empty
  // so I'm just gonna remove it
  if (matrix[matrix.length - 1].length === 0) {
    matrix.pop();
  }

  return matrix;
};
