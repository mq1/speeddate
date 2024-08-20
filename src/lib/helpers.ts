// SPDX-FileCopyrightText: 2024 Manuel Quarneti <manuelquarneti@protonmail.com>
// SPDX-License-Identifier: GPL-3.0-only

// dumpster fire of unoptimized code
// hoping it doesn't crash the browser with small numbers

export const getCouples = (peopleCount: number) => {
  const couples: number[][] = [];

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
  // this is a mess
  for (let i = 0; i < 100; i++) {
    matrix.push([]);
  }

  for (const couple of couples) {
    let present = false;
  
    for (const row of matrix) {
      for (const [a, b] of row) {
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
        row.push(couple);
        break;
      }
    }
  }

  // remove empty arrays
  matrix = matrix.filter((array) => array.length > 0);

  return matrix;
};
