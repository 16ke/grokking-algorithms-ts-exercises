function maxSimpleSearchSteps(listSize: number): number {
    return listSize;
}
  
function maxBinarySearchSteps(listSize: number): number {
    return Math.ceil(Math.log2(listSize));
}


const listSize = 128;

console.log( '${128}', maxSimpleSearchSteps(listSize));
console.log('${128}', maxBinarySearchSteps(listSize));
