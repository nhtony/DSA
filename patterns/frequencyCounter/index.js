// 1. Frequency Counter Pattern

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// console.log(same([1, 2, 3], [1, 9, 4]));

// function validAnagram(str1, str2) {
//   if (!(str1.length && str2.length)) return true;
//   let req1 = {};
//   let req2 = {};
//   const lowerStr1 = str1.toLowerCase();
//   const lowerStr2 = str2.toLowerCase();
//   for (const char1 of lowerStr1) {
//     req1[char1] = (req1[char1] || 0) + 1;
//   }
//   for (const char2 of lowerStr2) {
//     req2[char2] = (req2[char2] || 0) + 1;
//   }
//   for (const key in req1) {
//     if (!(key in req2)) return false;
//     if (req1[key] !== req2[key]) return false;
//   }
//   return true;
// }

// function validAnagram(first, second) {
//   if (first.length !== second.length) return fasle;

//   const lookup = {};

//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
//   }

//   for (let i = 0; i < second.length; i++) {
//     const letter = second[i];
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }
//   return true;
// }

function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = new Map();

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup.set(letter, lookup.has(letter) ? lookup.get(letter) + 1 : 1);
  }

  for (let i = 0; i < second.length; i++) {
    const letter = second[i];
    if (!lookup.has(letter)) {
      return false;
    }
  }

  return true;
}

// console.log(validAnagram("", ""));
// console.log(validAnagram("aWesome", "awesom"));
// console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("anagaram", "nagabram"));

// function mostFrequentCharacter(str) {
//   const map = new Map();
//   let maxValue = -Infinity;
//   let maxKey = null;
//   for (let i = 0; i < str.length; i++) {
//     let value = map.has(str[i]) ? map.get(str[i]) + 1 : 1;
//     map.set(str[i], value);
//   }
//   // find max value in map
//   for (const [key, value] of map) {
//     if (value > maxValue) {
//       maxValue = value;
//       maxKey = key;
//     }
//   }
//   return maxKey;
// }

// console.log(mostFrequentCharacter("hello"));
