function integer(str) {
  if (typeof str === typeof "Eli") {
    let newArr = [];
    let tempStr = str;
    tempStr = tempStr.split("");
    tempStr.forEach((num) => {
      if (num > 0) {
        newArr.push(num);
      }
    });
    let newStr = newArr.join("");
    let result = parseInt(newStr);
    return result;
  }
}

console.log(integer("0031"));
