var buildArray = function (nums) {
  let arr = [];
  let res = []
  for (let i = 0; i < nums.length; i++) {
    arr.push([nums[i]]);
  }
  for (let i = 0; i < arr.length; i++) {
    const j = arr[i][0];
    res.push(nums[j])
  }

  return res;
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));
console.log(buildArray([5, 0, 1, 2, 3, 4]));
