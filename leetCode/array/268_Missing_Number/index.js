var missingNumber = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (let j = 0; j <= nums.length; j++) {
    if (!map.has(j)) {
      return j;
    }
  }
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0,1]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));


// missingNumber([0, 1])

// 3
// 0
// 1

// 0
// 1
// 2
// 3
