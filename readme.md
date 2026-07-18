# Node.js Core Concepts Assignment

This repository contains solutions to basic Node.js and JavaScript runtime concepts, including the V8 Engine, Call Stack, Event Loop, libuv, and asynchronous programming.

---

## 📚 Topics Covered

- V8 Engine
- Synchronous vs Asynchronous Execution
- Call Stack
- Event Loop
- libuv
- `setTimeout()`
- Callback Queue
- Asynchronous JavaScript

---

## 📂 Project Structure

```
.
├── task1.js
├── task2.js
└── README.md
```

---

## 🚀 Task 1: Understanding Asynchronous Execution

### Code

```javascript
console.log("Start");

setTimeout(() => {
  console.log("This message appears after 2 seconds.");
}, 2000);

console.log("End");
```

### Expected Output

```
Start
End
This message appears after 2 seconds.
```

### Explanation

`setTimeout()` is an asynchronous function. It schedules the callback to execute after 2 seconds and immediately continues executing the remaining code. Therefore, `"End"` is printed before the delayed message.

After 2 seconds, the callback is placed in the Callback Queue. When the Call Stack becomes empty, the Event Loop moves the callback to the Call Stack, where it is executed.

---

## 🚀 Task 2: Event Loop Demonstration

### Code

```javascript
console.log("Program Started");

setTimeout(() => {
  console.log("Executing Delayed Task");
}, 1000);

console.log("Program Finished");
```

### Expected Output

```
Program Started
Program Finished
Executing Delayed Task
```

### Explanation

The `setTimeout()` function is asynchronous. It schedules the callback to run after 1 second while JavaScript continues executing the remaining code.

When the timer expires, the callback is added to the Callback Queue. The Event Loop waits until the Call Stack is empty, then moves the callback to the Call Stack for execution.

---

## 🧠 Theory Questions Covered

- What is the V8 Engine?
- Why is the V8 Engine important for Node.js?
- What is the main responsibility of the V8 Engine?
- What is the Call Stack?
- What is the Event Loop?
- Why is the Event Loop needed in Node.js?
- How does the Event Loop execute asynchronous code?
- What is libuv?
- What types of tasks are handled by libuv?
- Difference between Synchronous and Asynchronous execution

---

## 🛠 Technologies Used

- JavaScript (ES6)
- Node.js

---

## ▶️ How to Run

1. Clone the repository.

```bash
git clone <repository-url>
```

2. Navigate to the project folder.

```bash
cd <repository-folder>
```

3. Run the files using Node.js.

```bash
node task1.js
```

```bash
node task2.js
```

---

## 📖 Learning Outcome

After completing this assignment, you will understand:

- How the V8 Engine executes JavaScript.
- The difference between synchronous and asynchronous execution.
- How the Call Stack works.
- The role of the Event Loop.
- How libuv enables asynchronous I/O in Node.js.
- Why Node.js can efficiently handle multiple operations using a single thread.

---

## 👨‍💻 Author

M A RAHIM JIBON