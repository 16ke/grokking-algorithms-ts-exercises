function calculateDistance(route: number[], distances: number[][]): number {
    let totalDistance = 0;
    for (let i = 0; i < route.length - 1; i++) {
        totalDistance += distances[route[i]][route[i + 1]];
    }
    totalDistance += distances[route[route.length - 1]][route[0]];
    return totalDistance;
}

function tspBruteForce(distances: number[][]): number {
    const cities = distances.length;
    let shortestRouteDistance = Infinity;
    const allRoutes = getPermutations([...Array(cities).keys()]);
    
    allRoutes.forEach(route => {
        const distance = calculateDistance(route, distances);
        if (distance < shortestRouteDistance) {
            shortestRouteDistance = distance;
        }
    });
    
    return shortestRouteDistance;
}

function getPermutations(arr: number[]): number[][] {
    if (arr.length === 1) {
        return [arr];
    }

    const perms: number[][] = [];
    for (let i = 0; i < arr.length; i++) {
        const rest = arr.slice(0, i).concat(arr.slice(i + 1));
        const subPerms = getPermutations(rest);
        subPerms.forEach(perm => {
            perms.push([arr[i], ...perm]);
        });
    }
    return perms;
}

const distances = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
];

const result = tspBruteForce(distances);
console.log(result);
