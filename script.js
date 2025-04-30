document.addEventListener('DOMContentLoaded', function() {
  const numberA = document.getElementById('num_A');
  const numberB = document.getElementById('num_B');
  const operation = document.getElementById('operation');
  const resultDiv = document.getElementById('result');
  const historyLog = document.getElementById('historyLog');
  let history = [];

  document.getElementById('calculateBtn').addEventListener('click', () => {
      const a = parseFloat(numberA.value.trim());
      const b = parseFloat(numberB.value.trim());
      const op = operation.value;
      if (isNaN(a) || isNaN(b)) {
          return resultDiv.innerHTML = '<span class="error">Please enter valid numbers.</span>';
      }
      let result;
      switch (op) {
          case '+': result = a + b; break;
          case '-': result = a - b; break;
          case '*': result = a * b; break;
          case '/':
              if (b === 0) {
                  return resultDiv.innerHTML = '<span class="error">Division by zero is not allowed.</span>';
              }
              result = a / b;
              break;
          default:
              return resultDiv.innerHTML = '<span class="error">Invalid operation.</span>';
      }
      resultDiv.innerHTML = `<strong>Result:</strong> ${a} ${op} ${b} = ${result}`;
      history.push(`${a} ${op} ${b} = ${result}`);
      updateHistory();
  });

  document.getElementById('clearBtn').addEventListener('click', () => {
      numberA.value = '';
      numberB.value = '';
      operation.selectedIndex = 0;
      resultDiv.textContent = '';
  });

  document.getElementById('clearHistory').addEventListener('click', () => {
      history = [];
      updateHistory();
  });

  function updateHistory() {
      historyLog.innerHTML = history
          .map(entry => `<div class="history-entry">${entry}</div>`)
          .join('');
  }
});