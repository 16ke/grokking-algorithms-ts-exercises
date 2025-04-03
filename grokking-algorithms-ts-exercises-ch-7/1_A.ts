type Graph = { [key: string]: { [key: string]: number } };

function dijkstra(graph: Graph, start: string, end: string): number {
    let distances: { [key: string]: number } = {};
    let visited: Set<string> = new Set();
    let pq: [number, string][] = [];

    Object.keys(graph).forEach(node => {
        distances[node] = Infinity;
    });

    distances[start] = 0;
    pq.push([0, start]);

    while (pq.length > 0) {
        pq.sort((a, b) => a[0] - b[0]);
        let [currentDistance, currentNode] = pq.shift()!;

        if (visited.has(currentNode)) continue;
        visited.add(currentNode);

        if (currentNode === end) return currentDistance;

        for (let neighbor in graph[currentNode]) {
            let newDistance = currentDistance + graph[currentNode][neighbor];
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                pq.push([newDistance, neighbor]);
            }
        }
    }

    return Infinity;
}

const graphA: Graph = {
    "A": { "B": 5, "C": 2 },
    "B": { "D": 4, "E": 2 },
    "C": { "B": 8, "E": 7 },
    "D": { "E": 6, "F": 3 },
    "E": { "F": 1 },
    "F": {}
};

console.log(dijkstra(graphA, "A", "F"));
