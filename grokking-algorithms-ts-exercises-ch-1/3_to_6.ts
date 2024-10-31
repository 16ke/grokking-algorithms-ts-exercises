// Give the run time for each of these scenarios:
// 1.3 You have a name and you want to find a persons phone number in a phone book; 

function findPhoneNumberByName(): string {
    
    return "O(log n)";
}

console.log(findPhoneNumberByName());


// 1.4 You have a phone book and you want to find the persons name in the phone books;

function findNameByPhoneNumber(): string {
    return "O(n)";
}

console.log(findNameByPhoneNumber());


// 1.5 You want to read the numbers of every person in the phone book

function readAllNumbers(): string {
    return "O(n)";
}

console.log(readAllNumbers());


// 1.6 You want to read the numbers of just the A's

function readAllNumbersStartingWithA(): string {
    return "O(n)";
}

console.log(readAllNumbersStartingWithA());
