function greedyBoxPacking(truckSpace: number, boxes: number[]): number[] {
    boxes.sort((a, b) => b - a);

    let packedBoxes: number[] = [];
    let remainingSpace = truckSpace;

    for (let box of boxes) {
        if (box <= remainingSpace) {
            packedBoxes.push(box);
            remainingSpace -= box;
        }
    }

    return packedBoxes;
}

let truckSpace = 100; 
let boxes = [20, 50, 30, 10, 60, 40, 70]; 

let packed = greedyBoxPacking(truckSpace, boxes);
console.log("Boxes packed:", packed);
