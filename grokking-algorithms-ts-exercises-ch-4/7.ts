function doubleFirstElement(arr: number[]): number[] {
    if (arr.length > 0) {
        arr[0] *= 2;
    }
    return arr;
}

const numbers = [1, 2, 3, 4, 5];
console.log(doubleFirstElement(numbers)); 
