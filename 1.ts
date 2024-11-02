function sumList(list: number[]): number {
    if (list.length === 0) {
        return 0;
    }
    return list[0] + sumList(list.slice(1));
}

const numbers = [2, 4, 6];
console.log(sumList(numbers));
