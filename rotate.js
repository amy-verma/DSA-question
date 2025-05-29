function rotateArray(nums, k) {
    let size = nums.length;
    k = k % size; // ensure k is within array bounds

    // Step 1: Reverse the entire array
    reverse(nums, 0, size - 1);

    // Step 2: Reverse the first k elements
    reverse(nums, 0, k - 1); 

    // Step 3: Reverse the remaining n-k elements
    reverse(nums, k, size - 1);

    return nums;
}

function reverse(nums, left, right) {
    while (left < right) {
        const temp = nums[left];
        nums[left++] = nums[right];
        nums[right--] = temp;
    }
}

console.log(rotateArray([2, 3, 4, 5, 6], 2)); 
// Output: [5,6,2,3,4]
