let timerInterval;
let elapsedTime = 0;
let isRunning = false;
const display = document.getElementById('display');
const lapList = document.getElementById('lapList');

function updateDisplay() {
    const hours = String(Math.floor((elapsedTime / 3600000) % 60)).padStart(2, '0');
    const minutes = String(Math.floor((elapsedTime / 60000) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((elapsedTime / 1000) % 60)).padStart(2, '0');
    display.textContent = `${hours}:${minutes}:${seconds}`;
}

document.getElementById('start').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            elapsedTime += 1000;
            updateDisplay();
        }, 1000);
    }
});

document.getElementById('pause').addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay();
    lapList.innerHTML = ''; // Clear lap times
});

document.getElementById('lap').addEventListener('click', () => {
    if (isRunning) {
        const lapTime = document.createElement('li');
        lapTime.textContent = display.textContent;
        lapList.appendChild(lapTime);
    }
});

/*let timerInterval;
let elapsedTime = 0;
let isRunning = false;
const display = document.getElementById('display');
const lapList = document.getElementById('lapList');

// Update the display with formatted time
function updateDisplay() {
    const hours = String(Math.floor((elapsedTime / 3600000) % 60)).padStart(2, '0');
    const minutes = String(Math.floor((elapsedTime / 60000) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((elapsedTime / 1000) % 60)).padStart(2, '0');
    display.textContent = `${hours}:${minutes}:${seconds}`;
}

// Start the timer
document.getElementById('start').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            elapsedTime += 1000;
            updateDisplay();
        }, 1000);
    }
});

// Pause the timer
document.getElementById('pause').addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
});

// Reset the timer
document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay();
    lapList.innerHTML = ''; // Clear lap times
});

// Record a lap time
document.getElementById('lap').addEventListener('click', () => {
    if (isRunning) {
        const lapTime = document.createElement('li');
        lapTime.textContent = display.textContent; // Display the current time
        lapList.appendChild(lapTime);
    }
});

// Disable/enable buttons based on timer state
function toggleButtons() {
    document.getElementById('start').disabled = isRunning;
    document.getElementById('lap').disabled = !isRunning;
}

toggleButtons(); // Initial button state

// Update button states on click
document.getElementById('start').addEventListener('click', toggleButtons);
document.getElementById('pause').addEventListener('click', toggleButtons);
document.getElementById('reset').addEventListener('click', toggleButtons);

*/