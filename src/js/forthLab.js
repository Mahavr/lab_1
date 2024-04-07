const counterInput = document.querySelector('.counterInput');
const wrapper = document.querySelector('.wrapper');
const form = document.querySelector('#form');
let inputs = document.querySelectorAll('.input');
const answer1 = document.querySelector(`.answer1`);
const answer2 = document.querySelector(`.answer2`);

form.addEventListener('submit', onSubmit);
counterInput.addEventListener('input', onChange);
let matrix = [];
let coordinatesPairs = 0;

function onChange(e) {
  e.preventDefault();
  const count = e.target.value;
  wrapper.innerHTML = '';
  for (let i = 0; i < count; i++) {
    wrapper.innerHTML += `<label><input class="input" type="text" /></label>`;
  }
  inputs = document.querySelectorAll('.input');
}

function onSubmit(e) {
  e.preventDefault();

  const lengths = Array.from(inputs).map(input => input.value.length);
  const sameLength = lengths.every((val, i, arr) => val === arr[0]);
  if (sameLength) {
    matrix = [];
    inputs.forEach(input => {
      matrix.push(input.value.split(',').map(Number));
    });
    // console.log(matrix);
  } else {
    alert(
      'Всі рядки мають різну довжину. Будь ласка, введіть рядки однакової довжини.'
    );
  }
  getEdges1(matrix);
  //   const option = e.target[0].value;
  //   if (option === 'directed') {
  //   } else {
  //   }
}

function getEdges1(matrix) {
  let coordinates = [];
  for (let i = 0; i < matrix.length; i++) {
    let rowCoordinates = [];
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        let coord = [i + 1, j + 1];
        let isMirror = false;

        for (let k = 0; k < coordinates.length; k++) {
          let mirrorCoords = coordinates[k];
          for (let l = 0; l < mirrorCoords.length; l++) {
            let mirrorCoord = mirrorCoords[l];
            if (mirrorCoord[0] === coord[1] && mirrorCoord[1] === coord[0]) {
              isMirror = true;
              break;
            }
          }
          if (isMirror) {
            break;
          }
        }

        if (!isMirror) {
          rowCoordinates.push(coord);
        }
      }
    }
    if (rowCoordinates.length > 0) {
      coordinates.push(rowCoordinates);
    }
  }
  countPairs(coordinates);
}

function getEdges2(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let rowCoordinates = [];
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        rowCoordinates.push([i + 1, j + 1]);
      }
    }
    if (rowCoordinates.length > 0) {
      coordinates.push(rowCoordinates);
    }
  }
}

function countPairs(coordinates) {
  coordinatesPairs = 0;
  coordinates.forEach(coordinatesRow => {
    coordinatesPairs += coordinatesRow.length;
  });
  // console.log(coordinatesPairs);
  renderMatrixCoordinates(coordinates, coordinatesPairs);
}

function renderMatrixCoordinates(coordinates, coordinatesPairs) {
  let renderE = '';
  let renderV = '';

  for (let i = 0; i < coordinatesPairs; i++) {
    renderE += `E${i + 1} &nbsp &nbsp &nbsp|  `;
  }

  coordinates.forEach(coordinateRow => {
    coordinateRow.forEach(number => {
      renderV += `V${number[0]}V${number[1]} | `;
    });
  });
  answer1.innerHTML = renderE;
  answer2.innerHTML = renderV;
}
