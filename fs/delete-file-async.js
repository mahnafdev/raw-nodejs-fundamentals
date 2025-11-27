const { unlink, writeFile, existsSync } = require("fs");

writeFile(
	"./data/enderfile.txt",
	"SECRET File\nDelete it IMMEDIATELY after creation\nLike an ENDERMAN",
	(err) => {
		if (err) console.error("WriteFileError:", err.message);
		else {
			console.log("200 Ok: Enderfile (txt) created");
			if (existsSync("./data/enderfile.txt")) {
				unlink("./data/enderfile.txt", (err) => {
					if (err) console.error("DeleteFileError:", err.message);
					else {
						console.log("200 Ok: Enderfile (txt) deleted");
					}
				});
			} else {
				console.error("400 Bad Request: Enderfile (txt) doesn't exist");
			}
		}
	},
);
