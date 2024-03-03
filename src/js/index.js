const form = document.querySelector('#form');
const results = document.querySelector('.results');
let result = [];
let trueText = '';
let falseText = '';

function onSubmit(e) {
  e.preventDefault();
  //   console.log(e);
  const option = e.target[0].value;
  const firstArr = e.target[1].value.split(',');
  const secondArr = e.target[2].value.split(',');

  //   console.log(firstArr);
  selectType(option, firstArr, secondArr);
}

form.addEventListener('submit', onSubmit);

function selectType(option, firstArr, secondArr) {
  switch (option) {
    case 'union':
      result = firstArr.concat(
        secondArr.filter(element => !firstArr.includes(element))
      );
      addMarkup(result);
      break;

    case 'intersection':
      result = firstArr.filter(element => secondArr.includes(element));
      addMarkup(result);
      break;

    case 'difference':
      result = firstArr.filter(element => !secondArr.includes(element));
      addMarkup(result);
      break;
    case 'symdiff':
      result = firstArr
        .filter(element => !secondArr.includes(element))
        .concat(secondArr.filter(element => !firstArr.includes(element)));
      addMarkup(result);
      break;
    case 'inclusion':
      result = secondArr.every(element => firstArr.includes(element));
      trueText = 'A &#8835 B';
      falseText = 'A &#8837 B';
      addMarkup(result, trueText, falseText);
      break;
    case 'equality':
      result = equality(firstArr, secondArr);
      trueText = 'A &#61 B';
      falseText = 'A &#8800 B';
      addMarkup(result, trueText, falseText);

      break;

    default:
      console.log('Invalid subscription type');
  }
}

function equality(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false;
  }

  return firstArr.every(element => secondArr.includes(element));
}

function addMarkup(result, trueText, falseText) {
  let markup = '';

  if (result == true) {
    markup = `<p>${trueText}</p>`;
  } else if (result == false) {
    markup = `<p>${falseText}</p>`;
  } else {
    markup = `<p>${result.join(',')}</p>`;
  }
  if (result == undefined) {
    markup = `<p>"Введіть дані"/p>`;
  }
  results.innerHTML = markup;
}
