var getConcatenation = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    res.push(element);
  }
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    res.push(element);
  }
  return res;
};

console.log(getConcatenation([1, 2, 1]));
console.log(getConcatenation([1, 3, 2, 1]));
