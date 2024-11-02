function maxSimpleSearchSteps(listSize: number): number {
    return listSize;
}
  
function maxBinarySearchSteps(listSize: number): number {
    return Math.ceil(Math.log2(listSize));
}


const listSize = 256;

console.log(maxSimpleSearchSteps(listSize));
console.log(maxBinarySearchSteps(listSize));
