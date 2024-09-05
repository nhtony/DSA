function linearSearch(array, n) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5], 3));
console.log(linearSearch([5,4 ,3 ,2 ,1], 5));


