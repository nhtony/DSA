function bubbleSort(array) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(i, j, i -1);
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        console.log("swap", array);
      }
    }
  }

  console.log(array);
  return array;
}

bubbleSort([6, 3, 7, 5, 14, 9]);
// i = 6, n = 5 => 3 6 5 7 14 9
// i = 5, n = 4 => 3 6 5 7 14 9
// i = 4, n = 3 => 3 5 6 7 14 9
// i = 3, n = 2 =>
