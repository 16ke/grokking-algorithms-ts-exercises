function countElements(list: any[]): number {
    if (list.length === 0) {
        return 0;
    }
    return 1 + countElements(list.slice(1));
}

const elements = [2, 4, 6];
console.log(countElements(elements)); 
