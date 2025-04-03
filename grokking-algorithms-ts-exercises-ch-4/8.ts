function multiplicationTable(arr: number[]): number[][] {
    const table: number[][] = [];

    for (let i = 0; i < arr.length; i++) {
        const row: number[] = [];
        for (let j = 0; j < arr.length; j++) {
            row.push(arr[i] * arr[j]);
        }
        table.push(row);
    }

    return table;
}

const numbers = [2, 3, 7, 8, 10];
console.log(multiplicationTable(numbers));
