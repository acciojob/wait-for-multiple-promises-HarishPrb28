//your JS code here. If required.
// Get the table and add the loading row
const table = document.querySelector('#myTable');
const loadingRow = table.insertRow();
const loadingCell = loadingRow.insertCell();
loadingCell.colSpan = 2;
loadingCell.textContent = 'Loading...';

// Create the promises
const promise1 = new Promise(resolve => setTimeout(() => resolve(), Math.floor(Math.random() * 3000) + 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve(), Math.floor(Math.random() * 3000) + 1000));
const promise3 = new Promise(resolve => setTimeout(() => resolve(), Math.floor(Math.random() * 3000) + 1000));

// Wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
  .then(() => {
    // Remove the loading row
    table.deleteRow(loadingRow.rowIndex);

    // Create and populate the rows with the promise values
    const row1 = table.insertRow();
    const row2 = table.insertRow();
    const row3 = table.insertRow();
    const row4 = table.insertRow();
    const totalDuration = (performance.now() - startTime) / 1000; // Calculate the total time in seconds

    row1.insertCell().textContent = 'Promise 1';
    row1.insertCell().textContent = (promise1Duration / 1000).toFixed(3);

    row2.insertCell().textContent = 'Promise 2';
    row2.insertCell().textContent = (promise2Duration / 1000).toFixed(3);

    row3.insertCell().textContent = 'Promise 3';
    row3.insertCell().textContent = (promise3Duration / 1000).toFixed(3);

    row4.insertCell().textContent = 'Total';
    row4.insertCell().textContent = totalDuration.toFixed(3);
  });

// Get the start time for calculating the total time
const startTime = performance.now();

// Get the duration for each promise
let promise1Duration, promise2Duration, promise3Duration;
promise1.then(() => promise1Duration = performance.now() - startTime);
promise2.then(() => promise2Duration = performance.now() - startTime);
promise3.then(() => promise3Duration = performance.now() - startTime);
