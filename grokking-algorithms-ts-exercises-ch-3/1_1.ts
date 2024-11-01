function greet(name: string): void {
    console.log("Entering greet with name:", name);
    greet2(name); // Calls the next function
    console.log("Exiting greet with name:", name);
}

function greet2(name: string): void {
    console.log("Entering greet2 with name:", name);
    
    console.log("Exiting greet2 with name:", name);
}


greet("Maggie");

