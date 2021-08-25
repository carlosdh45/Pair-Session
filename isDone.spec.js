const isDone = require('.');

let failures = 0;

console.log('isDone return true for input "a" ');
if(isDone('a') === true) {
    console.log("OK! PASSED");
} else {
    console.log('FAIL! NOT PASSED');
    failures += 1;
}

console.log('isDone return false for input "c" ');
if (isDone('c') === false){
    console.log("OK! PASSED");
} else {
    console.log('FAIL! NOT PASSED');
    failures += 1;
}

if (failures > 0) {
    console.error('Test Failed');
    process.exit(1);
}