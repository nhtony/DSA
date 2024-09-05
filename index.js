// function solution(A) {
//   // Implement your solution here
//   let res = 1;
//   A.sort((a, b) => a - b);

//   if (A.length === 0 || A[A.length - 1] <= 0) {
//     return 1;
//   }

//   for (let index = 0; index < A.length; index++) {
//     if (A[index] === res) {
//       res++;
//     } else if (A[index] > res) {
//       return res;
//     }
//   }
//   return res;
// }
// // const res = solution([1, 2, 5, 6]);
// // console.log(res);

// function findSmallestMissingPositive(nums) {
//   const n = nums.length;
//   const set = new Set();

//   nums.forEach((element) => {
//     if (element > 0) {
//       set.add(element);
//     }
//   });

//   console.log('set', set);

//   for (let i = 1; i <= n + 1; i++) {
//     if (!set.has(i)) {
//       return i;
//     }
//   }
//   return n + 1;
// }

// const res = findSmallestMissingPositive([1, 2, 3, 4]);
// const res1 = findSmallestMissingPositive([-2, -1, 2]);
// console.log(res);
// console.log(res1);

// var findKthLargest = function (nums, k) {
//   nums.sort((a, b) => b - a);
//   // return secondMax;
//   // console.log(sorted);
//   return nums[k - 1];
// };
// console.log(findKthLargest([3,2,1,5,6,4], 2));
// console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
// console.log(findKthLargest([7, 6, 5, 4, 3, 2, 1], 5));
// console.log(findKthLargest([3, 3, 3, 3, 4, 3, 3, 3, 3], 5));

function test(array) {
  let i = 0;
  let temp = 0;
  for (let j = 0; j < array.length; j++) {
    if (array[j] !== 0) {
      temp = array[i]
      array[i] = array[j];
      array[j] = temp;
      i++
    }
  }
  console.log('array', array);
  
}

test([2, 3, 0, 4]);
test([1, 2, 3, 0, 0]);
test([0, 2, 3, 0, 0]);
test([0, 0, 3, 0, 0]);
test([1, 0, 1, 3]);
