function findMean(nums) {
    if (nums.length === 0) {
        return null; // Handle empty array
    }
    const total = nums.reduce((acc, num) => acc + num, 0);
    const mean = total / nums.length;
    return mean; 
}

function findMedian(nums) {
    const sortedNums = nums.slice().sort((a, b) => a - b);
    const n = sortedNums.length;
    if (n % 2 === 0) {
        const mid1 = sortedNums[n / 2 - 1];
        const mid2 = sortedNums[n / 2];
        return (mid1 + mid2) / 2;
    } else {
        return sortedNums[Math.floor(n / 2)];
    }
}

function findMode(nums) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let mode = [];
    // Count the frequency of each number
    nums.forEach(num => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        if (frequencyMap[num] > maxFrequency) {
            maxFrequency = frequencyMap[num];
        }
    });

    // Find numbers with the highest frequency
    for (const num in frequencyMap) {
        if (frequencyMap[num] === maxFrequency) {
            mode.push(parseInt(num));
        }
    }

    return mode;
}


//  * Attempt to convert an array of strings to an array of numbers
//  * @param {Array} numsAsStrings array of strings
//  * @returns {Array|Error} an array or an error object

function convertValNumsArray(numsAsStrings) {
    let result = [];
  
    for (let i = 0; i < numsAsStrings.length; i++) {
      let valToNumber = Number(numsAsStrings[i]);
  
      if (Number.isNaN(valToNumber)) {
        return new Error(
          `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
        );
      }
  
      result.push(valToNumber);
    }
    return result;
  }

    module.exports = {
        findMean,
        findMedian,
        findMode,
        convertValNumsArray,
      };
      