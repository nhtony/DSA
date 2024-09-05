function solution1(arr1, arr2) {
  const arr = arr1.concat(arr2);
  const obj = {};
  for (let val of arr) {
    obj[val] = (obj[val] || 0) + 1;
  }
  return Object.keys(obj);
}

function solution2(arr1, arr2) {
  const arr = arr1.concat(arr2);
  const set = new Set(arr);
  return Array.from(set);
}

console.log(solution2([1, 2, 3, 4, 5], [2, 3, 4, 4, 5]));
console.log(
  solution2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12])
);
