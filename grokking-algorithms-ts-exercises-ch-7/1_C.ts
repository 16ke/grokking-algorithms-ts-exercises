type Graph = { [key: string]: { [key: string]: number } };

function dijkstra(graph: Graph, start: string, end: string): number {
    let distances: { [key: string]: number } = {};
    let visited: Set<string> = new Set();
    let priorityQueue: { node: string, cost: number }[] = [];

    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[start] = 0;
    priorityQueue.push({ node: start, cost: 0 });

    while (priorityQueue.length > 0) {
        priorityQueue.sort((a, b) => a.cost - b.cost);
        let { node: current } = priorityQueue.shift()!;

        if (current === end) return distances[current];

        if (!visited.has(current)) {
            visited.add(current);
            for (let neighbor in graph[current]) {
                let newDist = distances[current] + graph[current][neighbor];
                if (newDist < distances[neighbor]) {
                    distances[neighbor] = newDist;
                    priorityQueue.push({ node: neighbor, cost: newDist });
                }
            }
        }
    }
    return Infinity;
}

const graphC: Graph = {
    "A": { "B": 2, "C": 2 },
    "B": { "D": 2, "E": 2 },
    "C": { "B": 2 },
    "D": { "C": -1, "E": 2 },
    "E": {},
};

console.log(dijkstra(graphC, "A", "E")); // Dijkstra fails due to negative weight
