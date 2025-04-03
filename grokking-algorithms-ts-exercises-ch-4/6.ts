function doubleElements(arr: number[]): number[] {
    return arr.map(num => num * 2);
}

const numbers = [1, 2, 3, 4, 5];
console.log(doubleElements(numbers)); // Output: [2, 4, 6, 8, 10]
