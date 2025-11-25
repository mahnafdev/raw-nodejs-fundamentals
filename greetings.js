const args = process.argv;

const userName = args[2] || "Guest";
const currentTime = new Date().getHours();

let greeting = "";

if (currentTime > 5) greeting = "Good Morning";
else if (currentTime > 11) greeting = "Good Noon";
else if (currentTime > 15) greeting = "Good Afternoon";
else if (currentTime > 17) greeting = "Good Evening";
else if (currentTime > 19) greeting = "Good Night";

console.log(`${greeting}, ${userName}`);
