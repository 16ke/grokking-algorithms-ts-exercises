function hashA(input: string): number {
    return 1; 
}

function hashB(input: string): number {
    return input.length % 10; 
}

function hashC(input: string): number {
    const firstChar = input[0].toLowerCase();
    return (firstChar.charCodeAt(0) - 97) % 10; 
}

function hashD(input: string): number {
    const primeNumbers: { [key: string]: number } = {
        a: 2, b: 3, c: 5, d: 7, e: 11, f: 13, g: 17, h: 19, i: 23, j: 29, k: 31, l: 37,
        m: 41, n: 43, o: 47, p: 53, q: 59, r: 61, s: 67, t: 71, u: 73, v: 79, w: 83,
        x: 89, y: 97, z: 101
    };

    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        const char = input[i].toLowerCase();
        sum += primeNumbers[char as keyof typeof primeNumbers] || 0;
    }

    return sum % 10;
}

const batterySizes = ["A", "AA", "AAA", "AAAA"];

console.log("Hash A outputs:");
batterySizes.forEach(battery => console.log(`"${battery}": ${hashA(battery)}`));

console.log("Hash B outputs:");
batterySizes.forEach(battery => console.log(`"${battery}": ${hashB(battery)}`));  // More distribution and less incidence

console.log("Hash C outputs:");
batterySizes.forEach(battery => console.log(`"${battery}": ${hashC(battery)}`));

console.log("Hash D outputs:");
batterySizes.forEach(battery => console.log(`"${battery}": ${hashD(battery)}`));  // More distribution and less incidence
