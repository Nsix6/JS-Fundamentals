const { argv } = require("node:process");

let times = parseInt(argv[2]);

if (isNaN(times)) {
  console.log("Missing number of occurrences");
} else {
  while (times > 0) {
    console.log("C is fun");
    times--;
  }
}
