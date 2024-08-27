const fs = require('fs');

// Problem 1: Synchronous vs. Asynchronous Console Log
console.log("This is synchronous");

setTimeout(() => {
    console.log("This is asynchronous");
}, 2000);

console.log("End of script");

// Problem 2: Repeated Message with Interval
console.log("Interval started");

const intervalId = setInterval(() => {
    console.log("Repeating message...");
}, 3000);

setTimeout(() => {
    clearInterval(intervalId);
}, 10000);

// Problem 3: Asynchronous File Reading vs. Synchronous File Reading
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("Asynchronous read:", data);
});

const dataSync = fs.readFileSync('input.txt', 'utf8');
console.log("Synchronous read:", dataSync);

// Problem 4: Combining Synchronous and Asynchronous Operations
const dataSync2 = fs.readFileSync('data.txt', 'utf8');
console.log("Synchronous read:", dataSync2);

setTimeout(() => {
    console.log("Starting async operation...");
    fs.readFile('asyncData.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log("Asynchronous read:", data);
    });
}, 2000);

console.log("Script complete");

// Problem 5: Countdown
console.log("Countdown initiated...");
const delay = Date.now() + 3000;
while (Date.now() < delay) {
}

let count = 10;
const countdownId = setInterval(() => {
    console.log(count);
    count--;
    if (count < 0) {
        clearInterval(countdownId);
        setTimeout(() => {
            console.log("Liftoff!");
        }, 1000);
    }
}, 1000);
