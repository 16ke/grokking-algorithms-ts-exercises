function isSafe(graph: boolean[][], colour: number[], v: number, c: number): boolean {
    for (let i = 0; i < graph.length; i++) {
        if (graph[v][i] && colour[i] === c) {
            return false;
        }
    }
    return true;
}

function graphColouring(graph: boolean[][], m: number, colour: number[], v: number): boolean {
    if (v === graph.length) {
        return true;
    }

    for (let c = 1; c <= m; c++) {
        if (isSafe(graph, colour, v, c)) {
            colour[v] = c;
            if (graphColouring(graph, m, colour, v + 1)) {
                return true;
            }
            colour[v] = 0;
        }
    }

    return false;
}

function findMinColours(graph: boolean[][]): number {
    const n = graph.length;
    for (let m = 1; m <= n; m++) {
        let colour = Array(n).fill(0);
        if (graphColouring(graph, m, colour, 0)) {
            return m;
        }
    }
    return -1;
}

const graph = [
    [false, true, false, true],
    [true, false, true, true],
    [false, true, false, true],
    [true, true, true, false]
];

const result = findMinColours(graph);
console.log(result);
