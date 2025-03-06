//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function() {
  let inputValue = parseFloat(document.getElementById("ip").value);

  if (isNaN(inputValue)) {
    alert("Please enter a valid number.");
    return;
  }
  processNumber(inputValue);
});

function processNumber(number) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = '';


  new Promise((resolve) => {
    setTimeout(() => {
      resolve(number);
    }, 2000);
  })
  .then((result) => {
    outputDiv.innerHTML += `Result: ${result}<br>`;
    return result;
  })

  .then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(result * 2);
      }, 2000);
    });
  })
  .then((result) => {
    outputDiv.innerHTML += `Result: ${result}<br>`;
    return result;
  })

  .then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(result - 3);
      }, 1000);
    });
  })
  .then((result) => {
    outputDiv.innerHTML += `Result: ${result}<br>`;
    return result;
  })


  .then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(result / 2);
      }, 1000);
    });
  })
  .then((result) => {
    outputDiv.innerHTML += `Result: ${result}<br>`;
    return result;
  })


  .then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(result + 10);
      }, 1000);
    });
  })
  .then((result) => {
    outputDiv.innerHTML += `Final Result: ${result}`;
  })
}
