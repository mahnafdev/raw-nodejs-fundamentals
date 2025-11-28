const os = require("os");

console.log(`Architecture: ${os.arch()}`);
console.log(
	`${
		os.arch().endsWith("64")
			? "64-bit"
			: os.arch().endsWith("32") || os.arch() === "arm"
			? "32-bit"
			: ""
	} processor`,
);
console.log(`Parallelism amount: ${os.availableParallelism()}`);
console.log(`CPUs: ${os.cpus().length}`);
console.log(`The 1st CPU model: ${os.cpus()[0].model}`);
console.log(
	`Endianness: ${os.endianness() === "LE" ? "Little Endian (LE)" : "Big Endian (BE)"}`,
);
console.log(`Free Memory: ${os.freemem()} B`);
console.log(`Total Memory: ${os.totalmem()} B`);
console.log(`Home directory: ${os.homedir()}`);
console.log(`Host: ${os.hostname()}`);
console.log(`Machine type: ${os.machine()}`);
console.log(`Operating System: ${os.platform()}`);
console.log(`Version: ${os.release()}`);
console.log(`Temp Directory: ${os.tmpdir()}`);
console.log(`OS (Simplified): ${os.type()}`);
console.log(`Kernel Version: ${os.version()}`);
