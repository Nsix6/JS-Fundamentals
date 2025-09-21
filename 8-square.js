const { argv } = require("node:process");

let sizeOfSquare = parseInt(argv[2]);

if (isNaN(sizeOfSquare)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < sizeOfSquare; i++) {
    let row = "";
    for (let j = 0; j < sizeOfSquare; j++) {
      row += "X";
    }
    console.log(row);
  }
}
