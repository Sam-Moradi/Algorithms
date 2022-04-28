// Algorithm solutions with Node JS
// Pascal Triangle : https://leetcode.com/problems/pascals-triangle/
// Samfullstack80@gmail.com
// https://vibroacoustic.online

const promt = require("./common");

async function question() {
  const n = await promt([
    "Please enter an integer number to calculate the pascal triangle",
  ]);
  if (!parseInt(n[0])) {
    console.log("The input should be a positive number");
    process.exit(-1);
  } else if (n[0] < 0) {
    console.log("The number could not be negatuve");
    process.exit(-1);
  } else {
    console.log(pascalTriangle(parseInt(n[0])));
    process.exit(1);
  }
}

question();
function pascalTriangle(n) {
  let prevRow;
  const r = new Array(n).fill().map((row, index) => {
    let r = [1];
    for (let i = 1; i <= index; i++) {
      if (i === index) r.push(1);
      else {
        r.push(prevRow[i - 1] + prevRow[i]);
      }
    }
    prevRow = r;
    return r;
  });
  return r;
}
