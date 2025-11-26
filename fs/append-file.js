const { appendFileSync, appendFile } = require("fs");

const log1 = "Midnight Dark";
const log2 = "\nShisui Green";

//* Sync
try {
	appendFileSync("data/discord-banner.log", log1);
	console.log("Discord banner logfile created with Log-1");
} catch (error) {
	console.log(error.message);
}

//* Async
appendFile("data/discord-banner.log", log2, (error) => {
	if (error) console.log(error.message);
	else console.log("Discord banner Log-2");
});
