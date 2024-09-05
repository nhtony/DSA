var minimumOperations = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] + 1) % 3 === 0) {
      count++;
    } else if ((nums[i] - 1) % 3 === 0) {
      count++;
    }
  }
  return count;
};

console.log(minimumOperations([1, 2, 3, 4]));
console.log(minimumOperations([3, 6, 9]));
