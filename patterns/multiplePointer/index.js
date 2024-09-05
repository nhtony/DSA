function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

function countUniqueValues(arr) {
  let counter = 0;

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[counter]) {
      counter++;
      arr[counter] = arr[i];
    }
  }
  return counter + 1;
}

const res = countUniqueValues([1, 1, 3, 4]);
console.log("res", res);
