function solution(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return false;
    }
  }
  return true
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([5, 4, 6, 7, 6]));
console.log(solution([5, 4, 3, 2, 1]));
