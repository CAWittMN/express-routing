const createFrequencyCounter = (arr) => {
  return arr.reduce((acc, next) => {
    acc[next] = (acc[next] || 0) + 1;
    return acc;
  }, {});
};

const findMode = (arr) => {
  let freqCounter = createFrequencyCounter(arr);

  let count = 0;
  let mostFrequent;

  for (let key in freqCounter) {
    if (freqCounter[key] > count) {
      mostFrequent = key;
      count = freqCounter[key];
    }
  }

  return +mostFrequent;
};

const convertAndValidateNumsArray = (numsAsStrings) => {
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
};

const findMean = (nums) => {
  if (nums.length === 0) return 0;
  return nums.reduce((acc, cur) => acc + cur) / nums.length;
};

const findMedian = (nums) => {
  nums.sort((a, b) => a - b);
  let middleIndex = Math.floor(nums.length / 2);
  let median;

  if (nums.length % 2 === 0) {
    median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
  } else {
    median = nums[middleIndex];
  }
  return median;
};

module.exports = {
  createFrequencyCounter,
  findMean,
  findMedian,
  findMode,
  convertAndValidateNumsArray,
};
