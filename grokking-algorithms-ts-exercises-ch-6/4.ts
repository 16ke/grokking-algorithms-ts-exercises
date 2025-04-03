type Graph = { [key: string]: string[] };

function topologicalSort(graph: Graph): string[] {
    let inDegree: { [key: string]: number } = {};
    let result: string[] = [];
    let queue: string[] = [];

    Object.keys(graph).forEach(node => {
        inDegree[node] = 0;
    });

    Object.keys(graph).forEach(node => {
        for (let i = 0; i < graph[node].length; i++) {
            let neighbor = graph[node][i];
            inDegree[neighbor] = (inDegree[neighbor] || 0) + 1;
        }
    });

    Object.keys(inDegree).forEach(node => {
        if (inDegree[node] === 0) queue.push(node);
    });

    while (queue.length > 0) {
        let current = queue.shift()!;
        result.unshift(current);

        for (let i = 0; i < (graph[current] || []).length; i++) {
            let neighbor = graph[current][i];
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) queue.push(neighbor);
        }
    }

    return result.length === Object.keys(graph).length ? result : [];
}

const morningRoutine: Graph = {
    "wake up": [],
    "brush teeth": ["wake up"],
    "eat breakfast": ["brush teeth"],
    "pack lunch": ["wake up"],
    "exercise": ["wake up"],
    "shower": ["exercise"],
    "get dressed": ["shower"]
};

console.log(topologicalSort(morningRoutine));
