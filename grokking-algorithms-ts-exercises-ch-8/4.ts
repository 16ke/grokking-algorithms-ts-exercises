function bfs(graph: { [key: string]: string[] }, start: string): string[] {
    const visited: Set<string> = new Set();
    const queue: string[] = [start];
    const result: string[] = [];

    while (queue.length > 0) {
        const current = queue.shift()!;
        if (!visited.has(current)) {
            visited.add(current);
            result.push(current);
            const neighbors = graph[current];
            for (let neighbor of neighbors) {
                queue.push(neighbor);
            }
        }
    }

    return result;
}

const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B'],
    F: ['C'],
};

const result = bfs(graph, 'A');
console.log(result);
