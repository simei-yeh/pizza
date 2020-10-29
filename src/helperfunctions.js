var parseArray = function (array) {
  let pizzaObj = {};
  let currentMin = 0;
  let tempArray = [['', 0]];
  let resultArray = [];


  for (let i = 0; i < array.length; i++) {
    let currentArray = array[i].toppings;
    //check if array is longer than 1
    if (currentArray.length  > 1) {
      currentArray.sort();
    }
    pizzaObj[currentArray] = (pizzaObj[currentArray]+1) || 1;
  }

  for (let key in pizzaObj) {
    let currentValue = pizzaObj[key];
    if (currentValue > tempArray[tempArray.length-1][1]) {
      for (let i = 0; i < tempArray.length; i++) {
        //console.log('')
        if (currentValue > tempArray[i][1]) {
          tempArray.splice(i, 0, [key, currentValue]);
          if (tempArray.length >= 21) {
            tempArray.pop();
          }
          break;
        }
      }
    }
  }

  for (let j = 0; j < tempArray.length; j++) {
    let newObj = {};
    newObj['combos'] = tempArray[j][0];
    newObj['count'] = tempArray[j][1];
    resultArray.push(newObj);
  }


  return resultArray;

}

export {
  parseArray
}
