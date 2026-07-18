// Task 1: Create a program using setTimeout().

console.log("Start");

setTimeout(() => {
  console.log("This message appears after 2 seconds.");
}, 2000);

console.log("End");

// Explanation : 
// setTimeout() is an asynchronous function. When JavaScript reaches setTimeout(), it schedules the callback function to run after 2 seconds and immediately continues executing the next line of code. Therefore, "End" is printed before the delayed message.

// After 2 seconds, the callback function is placed in the Callback Queue. When the Call Stack becomes empty, the Event Loop moves the callback to the Call Stack, and "This message appears after 2 seconds." is printed.

// Task 2: Event Loop Demonstration
console.log("Program Started");

setTimeout(() => {
  console.log("Executing Delayed Task");
}, 1000);

console.log("Program Finished");