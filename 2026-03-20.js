// This is the initial naive implementation, which I will optimise later. 

function maxSubArray(array, k) {
  let start = 0;
  let end = start + k;
  const results = [];

  while (end <= array.length) {
    const subArray = array.slice(start, end);
    const maxElement = max(subArray);
    results.push(maxElement);
    start++;
    end++;
  }

  return results;
}


function max(nums) {
  let max = Number.NEGATIVE_INFINITY;

  for (const num of nums) {
    if (num > max) max = num;
  }

  return max;
}
