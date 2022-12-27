const os = require('node:os');

for (let cpu of os.cpus()) {
    console.log(cpu.model);
}

console.log('Number of CPUs: ', os.cpus().length);