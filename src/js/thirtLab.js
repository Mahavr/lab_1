const form = document.querySelector('#form');
const inputs = document.querySelectorAll('.input');
const results = document.querySelector('.results');
form.addEventListener('submit', onSubmit);
// let matrix = [];
const matrix = [];
function onSubmit(e) {
  e.preventDefault();

  const lengths = Array.from(inputs).map(input => input.value.length);
  const sameLength = lengths.every((val, i, arr) => val === arr[0]);
  if (sameLength) {
    inputs.forEach(input => {
      matrix.push(input.value.split(',').map(Number));
    });
    console.log(matrix);
  } else {
    alert(
      'Всі рядки мають різну довжину. Будь ласка, введіть рядки однакової довжини.'
    );
  }
  typeCheck(matrix);
}

function typeCheck(matrix) {
  const n = matrix.length;
  results.innerHTML = '';
  isReflexive(matrix, n)
    ? (results.innerHTML += `<p> Відношення рефлексивне </p>`)
    : (results.innerHTML += `<p>Відношення не рефлексивне </p>`);

  isAntireflexive(matrix, n)
    ? (results.innerHTML += `<p> Відношення антирефлексивне </p>`)
    : (results.innerHTML += `<p>Відношення не є антирефлексивна </p>`);

  isSymmetric(matrix, n)
    ? (results.innerHTML += `<p> Відношення симетричне </p>`)
    : (results.innerHTML += `<p> Відношення не симетричне </p>`);

  isAntisymmetric(matrix, n)
    ? (results.innerHTML += `<p> Відношення антисиметричне </p>`)
    : (results.innerHTML += `<p> Відношення не є антисиметричним </p>`);

  isTransitive(matrix, n)
    ? (results.innerHTML += `<p> Відношення транзитивне </p>`)
    : (results.innerHTML += `<p> Відношення не є транзитивним </p>`);
}

function isReflexive(matrix, n) {
  for (let i = 0; i < n; i++) {
    if (matrix[i][i] !== 1) {
      return false;
    }
  }
  return true;
}

function isAntireflexive(matrix, n) {
  for (let i = 0; i < n; i++) {
    if (matrix[i][i] !== 0) {
      return false;
    }
  }
  return true;
}

function isSymmetric(matrix, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] !== matrix[j][i]) {
        return false;
      }
    }
  }
  return true;
}
function isAntisymmetric(matrix, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && matrix[i][j] === 1 && matrix[j][i] === 1) {
        return false;
      }
    }
  }
  return true;
}

function isTransitive(matrix, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (matrix[i][j] === 1 && matrix[j][k] === 1 && matrix[i][k] !== 1) {
          return false;
        }
      }
    }
  }
  return true;
}
