interface Attraction {
    name: string;
    points: number;
    duration: number;
}

function maximizeAttractions(timeAvailable: number, attractions: Attraction[]): Attraction[] {
    attractions.sort((a, b) => b.points - a.points);

    let selectedAttractions: Attraction[] = [];
    let remainingTime = timeAvailable;

    for (let attraction of attractions) {
        if (attraction.duration <= remainingTime) {
            selectedAttractions.push(attraction);
            remainingTime -= attraction.duration;
        }
    }

    return selectedAttractions;
}

let timeAvailable = 7; 
let attractions: Attraction[] = [
    { name: "Hagia Sofia", points: 10, duration: 2 },
    { name: "Vatican", points: 8, duration: 3 },
    { name: "Notre-Dame", points: 5, duration: 1 },
    { name: "Versailles", points: 6, duration: 2 },
    { name: "Louvre", points: 4, duration: 1 },
    { name: "Sagrada Familia", points: 7, duration: 3 },
    { name: "Colosseum", points: 9, duration: 2 }
];

let selected = maximizeAttractions(timeAvailable, attractions);
console.log("Attractions selected:", selected);
