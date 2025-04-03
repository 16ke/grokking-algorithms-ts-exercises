let emptySlot = 0;

function hashFunction3(x: string): number {
    return emptySlot++;
}

console.log(hashFunction3("dog"));
console.log(hashFunction3("cat"));
console.log(hashFunction3("parrot"));
