type Graph = { [key: string]: string[] };

const morningRoutine: Graph = {
    "wake up": ["brush teeth", "shower"],
    "brush teeth": ["eat breakfast"],
    "shower": [],
    "eat breakfast": []
};

function topologicalSort(graph: Graph): string[] {
    let inDegree: { [key: string]: number } = {};
    let result: string[] = [];
    let queue: string[] = [];

    Object.keys(graph).forEach(node => {
        inDegree[node] = 0;
    });

    Object.keys(graph).forEach(node => {
        graph[node].forEach(neighbor => {
            inDegree[neighbor] = (inDegree[neighbor] || 0) + 1;
        });
    });

    Object.keys(inDegree).forEach(node => {
        if (inDegree[node] === 0) queue.push(node);
    });

    while (queue.length > 0) {
        let current = queue.shift()!;
        result.push(current);

        graph[current].forEach(neighbor => {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) queue.push(neighbor);
        });
    }

    return result.length === Object.keys(graph).length ? result : [];
}

function isValidOrder(order: string[], graph: Graph): boolean {
    let position: { [key: string]: number } = {};

    
    order.forEach((task, index) => {
        position[task] = index;
    });

    for (let task in graph) {
        for (let dependent of graph[task]) {
            if (position[task] > position[dependent]) {
                return false;
            }
        }
    }
    return true;
}

const listA = ["wake up", "shower", "eat breakfast", "brush teeth"]; 
const listB = ["wake up", "brush teeth", "eat breakfast", "shower"]; 
const listC = ["shower", "wake up", "brush teeth", "eat breakfast"]; 

console.log("Valid order from topological sort:", topologicalSort(morningRoutine));
console.log("Is List A valid?", isValidOrder(listA, morningRoutine)); // invalid
console.log("Is List B valid?", isValidOrder(listB, morningRoutine)); // valid
console.log("Is List C valid?", isValidOrder(listC, morningRoutine)); // invalid
