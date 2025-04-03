function hashA(name: string): number {
    return 1; // All names map to the same slot
}

function hashB(name: string): number {
    return name.length % 10;
}

function hashC(name: string): number {
    return name.charCodeAt(0) % 10;
}

function hashD(name: string): number {
    const primeMap: { [key: string]: number } = {
        'a': 2, 'b': 3, 'c': 5, 'd': 7, 'e': 11, 'f': 13, 'g': 17, 'h': 19, 
        'i': 23, 'j': 29, 'k': 31, 'l': 37, 'm': 41, 'n': 43, 'o': 47, 'p': 53,
        'q': 59, 'r': 61, 's': 67, 't': 71, 'u': 73, 'v': 79, 'w': 83, 'x': 89,
        'y': 97, 'z': 101
    };
    let sum = 0;
    for (let char of name.toLowerCase()) {
        sum += primeMap[char] || 0; 
    }
    return sum % 10;
}

const names = ["Esther", "Ben", "Bob", "Dan"];

console.log("Hash Function A:", names.map(name => hashA(name)));
console.log("Hash Function B:", names.map(name => hashB(name)));
console.log("Hash Function C:", names.map(name => hashC(name))); // greater distributuion and less incidence
console.log("Hash Function D:", names.map(name => hashD(name))); // greater distribution and less incidence
