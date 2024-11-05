
//exercise 4
// NodeJS   core module

os=require("os")
const util=require('util')
console.log("temporary directory " + os.tmpdir())
console.log("hostname: " + os.hostname())
console.log("OS: " + os.platform() + "release: " + os.release())
console.log("Uptime " + (os.uptime())/3600 + "hours")
console.log("userInfo " + util.inspect(os.userInfo()))
console.log("Memory " + os.totalmem()/1000000000 + "Giga byte")
console.log("Free " + os.freemem()/1000000000 + "Giga byte")
console.log("CPU " + util.inspect(os.cpus()))
console.log("Network " + util.inspect(os.networkInterfaces()))
console.log("The Programme End")