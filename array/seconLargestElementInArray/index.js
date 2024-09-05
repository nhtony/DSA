function solution(arr, n) {
  let res;
  const pre = new Map();

  if (n < 2 || n > arr.length) return;

  const helper = () => {
    let secondLargest = -Infinity;
    let largest = arr[0];
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
        index = i;
      } else if (
        arr[i] > secondLargest &&
        arr[i] !== largest &&
        !pre.has(arr[i])
      ) {
        secondLargest = arr[i];
        index = i;
      }
    }
    arr.splice(index, 1);
    return secondLargest;
  };

  for (let i = 1; i < n; i++) {
    res = helper();
    pre.set(res, i);
  }

  return res;
}

console.log(solution([1, 8, 3, 7, 6, 7, 4], 7));
