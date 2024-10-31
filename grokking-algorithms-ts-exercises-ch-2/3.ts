function binarySearchUsernames(usernames: string[], username: string): { found: boolean, index: number | null} {
    let low = 0;
    let high = username.length -1;

    while(low <= high) {
        const mid = Math.floor((low + high)/2);
        const guess = usernames[mid];

        if (guess === username) {
            return {found: true, index: mid};
        }
        if (guess < username) {
            low = mid +1;
        } else {
            high = mid -1;
        }
    }
    return {found: false, index: null};
}

const usernames = ["Andrew", "Bartholomew", "James son of Alpaheus", "James son of Zebedee", "John", "Judas Iscariot", "Matthew", "Matthias", "Philip", "Simon Peter", "Simon the Zealot", "Thaddeus", "Thomas"];
const isUserFound = binarySearchUsernames(usernames, "Matthias");
console.log(isUserFound);
