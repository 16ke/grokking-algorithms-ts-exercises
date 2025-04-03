function knapsack(items: { weight: number, value: number }[], capacity: number): number {
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

    return dp[n][capacity];
}

const items = [
    { weight: 4, value: 3000 }, 
    { weight: 3, value: 2000 }, 
    { weight: 1, value: 1500 }, 
    { weight: 1, value: 2000 }, 
    { weight: 1, value: 1000 } 
];

const knapsackCapacity = 4;
const maxValue = knapsack(items, knapsackCapacity);

console.log(maxValue);
