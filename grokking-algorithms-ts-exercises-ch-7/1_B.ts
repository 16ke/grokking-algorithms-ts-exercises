type Graph = { [key: string]: { [key: string]: number } };

function dijkstra(graph: Graph, start: string, end: string): number {
    const distances: { [key: string]: number } = {};
    const visited: Set<string> = new Set();
    const queue: { node: string; cost: number }[] = [];

    for (const node in graph) {
        distances[node] = Infinity;
    }
    distances[start] = 0;
    queue.push({ node: start, cost: 0 });

    while (queue.length > 0) {
        queue.sort((a, b) => a.cost - b.cost);
        const { node, cost } = queue.shift()!;

        if (node === end) return cost;
        if (visited.has(node)) continue;
        visited.add(node);

        for (const neighbor in graph[node]) {
            const newCost = cost + graph[node][neighbor];
            if (newCost < distances[neighbor]) {
                distances[neighbor] = newCost;
                queue.push({ node: neighbor, cost: newCost });
            }
        }
    }
    return Infinity; // No path found
}

const graphB: Graph = {
    "A": { "B": 10 },
    "B": { "D": 20 },
    "C": { "B": 1 },
    "D": { "C": 1, "E": 30 },
    "E": {},
};

console.log(dijkstra(graphB, "A", "E"));
