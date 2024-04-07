const form = document.querySelector('#form');
const results = document.querySelector('.results');
let result = [];

function onSubmit(e) {
  e.preventDefault();
  //   console.log(e);
  const option = e.target[0].value;
  const universalArr = e.target[1].value.split(',');
  const firstArr = e.target[2].value.split(',');
  const secondArr = e.target[3].value.split(',');

  selectType(option, firstArr, secondArr, universalArr);
}

form.addEventListener('submit', onSubmit);
function converToBit(universalArr, arr) {
  let resultArr = [];
  //   let test = universalArr.map(el => arr.includes(el));
  //   for (const el of test) {
  //     if (el) {
  //       resultArr.push(1);
  //     } else {
  //       resultArr.push(0);
  //     }
  //     }
  for (const el of universalArr) {
    resultArr.push(arr.includes(el) ? 1 : 0);
  }
  return resultArr;
}

function selectType(option, arrA, arrB, universalArr) {
  firstArr = converToBit(universalArr, arrA);
  secondArr = converToBit(universalArr, arrB);
  switch (option) {
    case 'union':
      result = firstArr.map((value, index) => value | secondArr[index]);
      //   for (let i = 0; i < a.length; i++) {
      //     result[i] = a[i] | b[i];
      //   }
      addMarkup(result, universalArr);
      break;
    case 'intersection':
      result = firstArr.map((value, index) => value & secondArr[index]);
      addMarkup(result, universalArr);
      break;

    case 'difference':
      result = firstArr.map((value, index) => value & !secondArr[index]);
      addMarkup(result, universalArr);
      break;
    case 'symdiff':
      result = firstArr.map((value, index) => value ^ secondArr[index]);
      addMarkup(result, universalArr);
      break;
    case 'cartesianProd':
      result = [];
      // for (let i = 0; i < universalArr.length; i++) {
      //   let row = [];
      //   for (let j = 0; j < universalArr.length; j++) {
      //     row.push([firstArr[i] * secondArr[j]]);
      //   }
      //   result.push(row);
      // }
      // firstArr.forEach(elementA => {
      //   secondArr.forEach(elementB => {
      //     result.push([elementA, elementB]);
      //   });
      // });
      firstArr.forEach(elementA => {
        let pairsArr = [];
        secondArr.forEach(elementB => {
          pairsArr.push([elementA, elementB]);
        });
        result.push(pairsArr);
      });
      // console.log(JSON.stringify(result));
      cartesianMarkup(result, arrA, arrB);

      break;
    default:
      console.log('Invalid subscription type');
  }
}
function converToNum(res, arru) {
  // let indices = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === 1) {
  //     indices.push(i);
  //   }
  // }
  // return indices;
  return res.reduce((result, value, index) => {
    if (value === 1) {
      result.push(arru[index]);
    }
    return result;
  }, []);
}
function cartesianConvert(result, firstArr, secondArr) {
  let result2 = [];
  console.log(JSON.stringify(result2));
  for (let i = 0; i < result.length; i++) {
    let row = [];
    for (let j = 0; j < result[i].length; j++) {
      let multipliedArr = [];
      if (firstArr[i] == undefined || secondArr[j] == undefined) {
        break;
      } else {
        multipliedArr[0] = firstArr[i];
        multipliedArr[1] = secondArr[j];
      }
      multipliedArr.length < 2 ? stop : row.push(multipliedArr);
    }
    row.length < 2 ? stop : result2.push(row);
  }

  return result2;
}

function cartesianMarkup(result, firstArr, secondArr) {
  let result2 = cartesianConvert(result, firstArr, secondArr);

  let markup = '';
  let rowString = '<p>[</p>\n';
  result2.forEach(function (subarray) {
    markup += '  <p>[' + subarray.join(', ') + '],</p>\n';
  });
  rowString += '<p>],</p>';
  results.innerHTML = markup;
}
function addMarkup(resultt, arru) {
  result = converToNum(resultt, arru);
  let markup = '';
  if (result == undefined) {
    markup = `<p>"Введіть дані"/p>`;
  }
  markup = `<p>${result.join(',')}</p>`;

  results.innerHTML = markup;
}
