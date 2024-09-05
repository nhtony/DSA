function solution(arr, d) {
  d = d % arr.length;
  let temp = [];
  for (let i = 0; i < d; i++) {
    temp.push(arr[i]);
  }
  for (let i = d; i < arr.length; i++) {
    arr[i - d] = arr[i];
  }
  for (let i = arr.length - d; i < arr.length; i++) {
    arr[i] = temp[i - (arr.length - d)];
  }

  return arr;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7], 3));
