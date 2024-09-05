var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let max = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === 1) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 0;
    }
  }

  max = Math.max(max, count);

  return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
console.log(findMaxConsecutiveOnes([1, 1, 0, 1]));
console.log(findMaxConsecutiveOnes([1]));
console.log(findMaxConsecutiveOnes([0]));
console.log(findMaxConsecutiveOnes([0, 0]));
console.log(findMaxConsecutiveOnes([1, 1]));
console.log(findMaxConsecutiveOnes([0, 1]));

//  0 1 2 3 4 5
// [1,1,0,1,1,1]
//            j

//  0 1 2 3 4 5
// [1,0,1,1,0,1]
//    i j

// 0 1 2 3
//[1,1,0,1]
//     i j

//  0  1
// [0, 0]
//  i  j

//  0  1
// [1, 1]
//  i  j
