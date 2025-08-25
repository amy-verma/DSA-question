const arr1 = ["a", "b", "c", "b"];
const arr2 = ["x", "y", "b", "b"];

function getIntersectionWithDuplicates(a1, a2) {
    const result = [];
    const arr2Copy = [...a2]; // To avoid modifying the original array

    for (let item of a1) {
        const index = arr2Copy.indexOf(item);
        if (index !== -1) {
            result.push(item);
            arr2Copy.splice(index, 1); // Remove matched item to handle duplicates properly
        }
    }

    return result;
}

const intersection = getIntersectionWithDuplicates(arr1, arr2);
console.log(intersection); // Output: ["b", "b"]
