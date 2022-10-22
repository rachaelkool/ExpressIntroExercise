function meanCalculator(nums){
    if(nums.length === 0) return 0;
    return nums.reduce(function (acc, next) {
        return acc + next;
    }) / nums.length
}


function medianCalculator(nums){  
    nums.sort((a, b) => a - b);
  
    let middleNum = Math.floor(nums.length / 2);
    let median;
  
    if (nums.length % 2 === 0) {
        median = (nums[middleNum] + nums[middleNum - 1]) / 2;
    } else {
        median = nums[middleNum];
    }
    return median
}


function modeCalculator(nums) {
    let frequency = nums.reduce(function(acc, next) {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});
  
    let count = 0;
    let mostFrequent;
  
    for (let key in frequency) {
        if (frequency[key] > count) {
            mostFrequent = key;
            count = frequency[key];
        }
    }
  
    return +mostFrequent;
}


function validNums(numsAsStrings) {
    let result = [];
  
    for (let i = 0; i < numsAsStrings.length; i++) {
        let val = Number(numsAsStrings[i]);
  
        if (Number.isNaN(val)) {
            return new Error(`${numsAsStrings[i]}' is not a number.`);
        }
    
        result.push(val);
    }
    return result;
}


module.exports = {
    meanCalculator, medianCalculator, modeCalculator, validNums
}