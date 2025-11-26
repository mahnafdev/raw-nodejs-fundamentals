const fs = require("fs");

console.log("Analyzing 'fs/'...");

try {
	const data = fs.readdirSync("fs/", { encoding: "utf-8" });
	console.log(data);
} catch (error) {
	console.log(error.message);
}

console.log("Analysis and Output complete!");
