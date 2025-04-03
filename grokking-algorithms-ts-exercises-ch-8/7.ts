function isClique(graph: boolean[][], people: number[]): boolean {
    for (let i = 0; i < people.length; i++) {
        for (let j = i + 1; j < people.length; j++) {
            if (!graph[people[i]][people[j]]) {
                return false;
            }
        }
    }
    return true;
}

function largestClique(graph: boolean[][]): number[] {
    const n = graph.length;
    let maxClique: number[] = [];
    
    for (let size = n; size >= 1; size--) {
        const combinations = getCombinations([...Array(n).keys()], size);
        
        for (let combo of combinations) {
            if (isClique(graph, combo)) {
                maxClique = combo;
                break;
            }
        }
        
        if (maxClique.length > 0) {
            break;
        }
    }
    
    return maxClique;
}

function getCombinations(arr: number[], size: number): number[][] {
    if (size === 0) {
        return [[]];
    }

    let combinations: number[][] = [];
    for (let i = 0; i <= arr.length - size; i++) {
        const head = arr.slice(i, i + 1);
        const tailCombinations = getCombinations(arr.slice(i + 1), size - 1);
        for (let tail of tailCombinations) {
            combinations.push(head.concat(tail));
        }
    }
    return combinations;
}

const graph = [
    [false, true, true, false],
    [true, false, true, true],
    [true, true, false, true],
    [false, true, true, false]
];

const result = largestClique(graph);
console.log(result);
