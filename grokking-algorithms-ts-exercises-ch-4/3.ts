function findMax(list: number[]): number {
    if (list.length === 2) {
        return list[0] > list[1] ? list[0] : list[1];
    }

    const subMax = findMax(list.slice(1));
    return list[0] > subMax ? list[0] : subMax;
}

const numbers = [2, 4, 8, 6];
console.log(findMax(numbers)); 
