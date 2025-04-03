function binarySearchRecursive(arr: number[], target: number, low = 0, high = arr.length - 1): number | null {
    if (low > high) {
        return null;
    }

    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    if (arr[mid] > target) {
        return binarySearchRecursive(arr, target, low, mid - 1);
    } else {
        return binarySearchRecursive(arr, target, mid + 1, high);
    }
}


const sortedArray = [1, 3, 5, 7, 9, 11];
console.log(binarySearchRecursive(sortedArray, 7));
console.log(binarySearchRecursive(sortedArray, 4)); 
