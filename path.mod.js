const path = require("path");

console.log("This file path:", __filename);
console.log("This directory path:", __dirname);
console.log("-".repeat(67));

const testPath = "/Ahnaf/banners/linkedinBanner.png";

console.log("File Path:", testPath);
console.log("Directory Path:", path.dirname(testPath));
console.log("File Name:", path.basename(testPath));
console.log("File Extension:", path.extname(testPath));
console.log("Normalized Path:", path.normalize(testPath));
console.log(
	"Path constructed from Object:",
	path.format({ dir: "/Ahnaf/banners", name: "linkedinBanner", ext: "png" }),
);
console.log("Path Details constructed from Path:", path.parse(testPath));
console.log(
	"Path from /fs/read-file-sync to /data/love-diary:",
	path.relative("fs/read-file-sync.js", "data/love-diary.txt"),
);
