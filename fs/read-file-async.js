const { readFile } = require("fs");

console.log("Luv Diary Opened...");

readFile("./data/love-diary.txt", "utf-8", (error, data) => {
	if (error) console.log(error.message);
	console.log(data);
});

console.log("Luv Diary Closed...");
