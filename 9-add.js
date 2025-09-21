const { argv } = require("node:process");

function add(a, b) {
  a = parseInt(argv[2]);
  b = parseInt(argv[3]);
  if (isNaN(a) || isNaN(b)) {
    console.log("NaN");
  } else {
    console.log(a + b);
  }
}

add(argv[2], argv[3]);
