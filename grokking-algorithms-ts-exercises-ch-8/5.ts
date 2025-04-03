interface Graph {
    [key: string]: { [key: string]: number };
}

function dijkstra(graph: Graph, start: string): { [key: string]: number } {
    const distances: { [key: string]: number } = {};
    const visited: Set<string> = new Set();
    const pq: { node: string; distance: number }[] = [];

    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[start] = 0;

    pq.push({ node: start, distance: 0 });

    while (pq.length > 0) {
        pq.sort((a, b) => a.distance - b.distance);
        const { node } = pq.shift()!;

        if (visited.has(node)) {
            continue;
        }

        visited.add(node);

        for (let neighbor in graph[node]) {
            const newDist = distances[node] + graph[node][neighbor];
            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                pq.push({ node: neighbor, distance: newDist });
            }
        }
    }

    return distances;
}

const graph: Graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 },
};

const result = dijkstra(graph, 'A');
console.log(result);
