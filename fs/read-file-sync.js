const { readFileSync } = require("fs");

console.log("Luv Diary Opened...");

try {
	const luvDiaryText = readFileSync("./data/love-diary.txt", "utf-8");
	console.log(luvDiaryText);
} catch (error) {
	console.log(error.message);
}

console.log("Luv Diary Closed...");
