// Importing required core modules
const os = require("os");
const util = require("util");

// Displaying laptop information using os core module
console.log("Temporary directory: " + os.tmpdir());
console.log("Hostname: " + os.hostname());
console.log("Operating System: " + os.platform() + " | Release: " + os.release());
console.log("Uptime: " + (os.uptime() / 3600).toFixed(2) + " hours");
console.log("User Info: " + util.inspect(os.userInfo()));
console.log("Total Memory: " + (os.totalmem() / 1_000_000_000).toFixed(2) + " GB");
console.log("Free Memory: " + (os.freemem() / 1_000_000_000).toFixed(2) + " GB");
console.log("CPU Details: " + util.inspect(os.cpus()));
console.log("Network Interfaces: " + util.inspect(os.networkInterfaces()));

console.log("Program end");