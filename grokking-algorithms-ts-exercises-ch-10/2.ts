type UserRatings = {
  [movie: string]: number;
};

type User = {
  name: string;
  ratings: UserRatings;
  weight: number;
};

function weightedAverage(neighbors: User[], movie: string): number {
  let totalWeight = 0;
  let weightedSum = 0;

  for (const neighbor of neighbors) {
    if (neighbor.ratings[movie] !== undefined) {
      weightedSum += neighbor.ratings[movie] * neighbor.weight;
      totalWeight += neighbor.weight;
    }
  }

  return totalWeight > 0 ? weightedSum / totalWeight : 0;
}

const joe: User = {
  name: 'Joe',
  ratings: { Caddyshack: 3 },
  weight: 1,
};

const dave: User = {
  name: 'Dave',
  ratings: { Caddyshack: 4 },
  weight: 1,
};

const wesAnderson: User = {
  name: 'Wes Anderson',
  ratings: { Caddyshack: 5 },
  weight: 3,
};

const neighbors = [joe, dave, wesAnderson];
console.log(weightedAverage(neighbors, 'Caddyshack'));
