const callStack: string [] = [];

function greet(name: string): void {
    callStack.push(`greet(${name})`);
    console.log("Entering greet:", callStack);

    greet2(name);

    console.log("Resuming greet after greet2 completes:", callStack);
    callStack.pop();
}

function greet2(name: string): void {
    callStack.push(`greet2(${name})`);
    console.log("entering greet2:", callStack);

    callStack.pop();
}

greet("Maggie");
console.log("Final state of call stack:", callStack);
