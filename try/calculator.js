function isNumber(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
      return false;
    } else {
      return true;
    }
}
  
function add(x, y) {
    if (isNumber(x, y)) {
      return x + y;
    }
    return 'Arguments contain a non-number';
}
  
function subtract(x, y) {
    if (isNumber(x, y)) {
      return x - y;
    }
    return 'Arguments contain a non-number';
}
  
function multiply(x, y) {
    if (isNumber(x, y)) {
      return x * y;
    }
    return 'Arguments contain a non-number';
}
  
function divide(x, y) {
    if (isNumber(x, y)) {
      return x / y;
    }
    return 'Arguments contain a non-number';
}
  
const calculator = {
    add,
    subtract,
    multiply,
    divide,
};
  
export default calculator;