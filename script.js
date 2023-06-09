const tableBody = document.querySelector('#output');

    const promise1 = new Promise((resolve) => {
      const time = Math.floor(Math.random() * 3) + 1;
      setTimeout(() => resolve(time), time * 1000);
    });

    const promise2 = new Promise((resolve) => {
      const time = Math.floor(Math.random() * 3) + 1;
      setTimeout(() => resolve(time), time * 1000);
    });

    const promise3 = new Promise((resolve) => {
      const time = Math.floor(Math.random() * 3) + 1;
      setTimeout(() => resolve(time), time * 1000);
    });

    Promise.all([
      { name: 'Promise 1', promise: promise1 },
      { name: 'Promise 2', promise: promise2 },
      { name: 'Promise 3', promise: promise3 }
    ])
      .then((values) => {
        let totalTime = 0;
        values.forEach((value) => {
          const row = document.createElement('tr');

          const nameCell = document.createElement('td');
          nameCell.textContent = value.name;
          row.appendChild(nameCell);

          const timeCell = document.createElement('td');
          timeCell.textContent = value.promise;
          row.appendChild(timeCell);

          tableBody.appendChild(row);

          totalTime += value.promise;
        });

        const totalRow = document.createElement('tr');

        const totalNameCell = document.createElement('td');
        totalNameCell.textContent = 'Total';
        totalRow.appendChild(totalNameCell);

        const totalTimeCell = document.createElement('td');
        totalTimeCell.textContent = totalTime.toFixed(3);
        totalRow.appendChild(totalTimeCell);

        tableBody.appendChild(totalRow);
      });