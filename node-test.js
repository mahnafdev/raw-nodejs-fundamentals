console.log(
	`Using Node.js ${process.release ? `${process.release.lts} (LTS), specifically ` : ""}${
		process.version
	}`,
);
console.log(`The CPU of this ${process.platform} OS uses ${process.arch} architecture`);
