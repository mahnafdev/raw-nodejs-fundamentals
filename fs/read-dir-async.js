const fs = require("fs");

console.log("Analyzing 'fs/'...");

fs.readdir("fs/", { encoding: "utf-8" }, (error, data) => {
	if (error) console.log(error.message);
	console.log(data);
});

console.log("Analysis and Output complete!");
