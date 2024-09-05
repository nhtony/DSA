var moveZeroes = function (nums) {
  let i = 0;
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {        
       swap(nums, j, i);
       i++;
    }
  }
//   console.log(nums);
};

moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0]);
//                     [0,1,0,3,12]
//                      i j
//                     [1,0,0,3,12]
//                        i j
//                     [1,0,0,3,12]
//                        i   j
//                     [1,3,0,0,12]
//                          i    j
