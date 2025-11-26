const fs = require("fs");

const log1 = "Restoring the lost Era of the Legends";
const log2 = "Recalling the lost Era of Legends";

//* Sync
try {
	fs.writeFileSync("data/discord-status.log", log1);
	console.log("Discord status logfile created with Log-1");
} catch (error) {
	console.log(error.message);
}

//* Async
fs.writeFile("data/discord-status.log", log2, (error) => {
	if (error) console.log(error.message);
	else console.log("Discord status Log-2");
});
