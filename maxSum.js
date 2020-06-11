function maxSum(arr) {
    let max = 0;
    let sum;
    for (let i = 0; i < arr.length; i++) {
        sum = 0;
        // Get sum of values from ith element to end of array
        // Check if sum up to current j is max, if so, replace max with sum
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum > max) max = sum;
        }
    }
    return max;
}

console.log(maxSum([4, 6, -3, 5, -2, 1]));
console.log(maxSum([1, 1, -2, 4]));
