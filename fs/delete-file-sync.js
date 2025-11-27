const { unlinkSync, writeFileSync, existsSync } = require("fs");

try {
	writeFileSync(
		"./data/enderfile.txt",
		"SECRET File\nDelete it IMMEDIATELY after creation\nLike an ENDERMAN",
	);
	console.log("200 Ok: Enderfile (txt) created");
	if (existsSync("./data/enderfile.txt")) {
		try {
			unlinkSync("./data/enderfile.txt");
			console.log("200 Ok: Enderfile (txt) deleted");
		} catch (err) {
			console.error("DeleteFileError:", err.message);
		}
	} else {
		console.error("400 Bad Request: Enderfile (txt) doesn't exist");
	}
} catch (err) {
	console.error("WriteFileError:", err.message);
}
