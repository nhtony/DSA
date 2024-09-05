function factorial(num) {
  if (num == 1) return 1;
  return num * factorial(num - 1);
}

// 1248. Count Number of Nice Subarrays
function numberOfSubarrays(array, k) {
  let result = 0;
  let count = 0;

  function helper(arr, i, e) {
    let start = i;
    let subLength = e;
    let countOddNumber = 0;

    if (subLength > arr.length) {
      return;
    }

    let subArray = arr.slice(start, subLength);

    // count odd number in sub-array
    for (let i = 0; i < subArray.length; i++) {
      if (subArray[i] % 2 !== 0) {
        countOddNumber++;
      }
    }

    if (countOddNumber === k) {
      count++;
    }

    helper(array, start + 1, subLength + 1);

    return count;
  }

  for (let index = k; index <= array.length; index++) {
    result += helper(array, 0, index);
    count = 0;
  }

  return result;
}
