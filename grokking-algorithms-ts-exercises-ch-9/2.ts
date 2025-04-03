function knapsack(items: { name: string, weight: number, value: number }[], capacity: number): number {
    const n = items.length;
    const dp: number[][] = Array(n + 1).fill(0).map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (items[i - 1].weight <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - items[i - 1].weight] + items[i - 1].value);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    let result = dp[n][capacity];
    let w = capacity;
    let selectedItems = [];
    for (let i = n; i > 0 && result > 0; i--) {
        if (result !== dp[i - 1][w]) {
            selectedItems.push(items[i - 1].name);
            result -= items[i - 1].value;
            w -= items[i - 1].weight;
        }
    }

    console.log("Optimal items to take:", selectedItems);
    return dp[n][capacity];
}

const items = [
    { name: "Water", weight: 3, value: 10 },
    { name: "Book", weight: 1, value: 3 },
    { name: "Food", weight: 2, value: 9 },
    { name: "Jacket", weight: 2, value: 5 },
    { name: "Camera", weight: 1, value: 6 }
];

const knapsackCapacity = 6;
const maxValue = knapsack(items, knapsackCapacity);
console.log("Maximum value:", maxValue);
