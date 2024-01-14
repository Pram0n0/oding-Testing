function analyseArray(array) {
  if (!Array.isArray(array)) {
    return 'Not an array';
  }

  if (array.length === 0) {
    return 'Array is empty';
  }

  for (let item of array) {
    if (typeof item !== 'number') {
      return 'Array contains non-numeric elements';
    }
  }

  const length = array.length;

  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum += array[i];
  }

  const average = sum / length;
  const min = Math.min(...array);
  const max = Math.max(...array);

  return {
    average,
    min,
    max,
    length,
  };
}

export default analyseArray;