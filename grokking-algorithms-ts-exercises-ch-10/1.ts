type UserRatings = {
  comedy: number;
  action: number;
  drama: number;
  horror: number;
  romance: number;
};

type User = {
  name: string;
  ratings: UserRatings;
  averageRating: number;
  normalizedRatings: UserRatings;
};

function calculateAverage(ratings: UserRatings): number {
  const values = Object.values(ratings);
  const sum = values.reduce((acc, curr) => acc + curr, 0);
  return sum / values.length;
}

function normalizeRatings(ratings: UserRatings, average: number): UserRatings {
  const normalized: UserRatings = {} as UserRatings;
  for (const key in ratings) {
    normalized[key as keyof UserRatings] = ratings[key as keyof UserRatings] - average;
  }
  return normalized;
}

function euclideanDistance(ratings1: UserRatings, ratings2: UserRatings): number {
  let sumOfSquares = 0;
  for (const key in ratings1) {
    sumOfSquares += Math.pow(ratings1[key as keyof UserRatings] - ratings2[key as keyof UserRatings], 2);
  }
  return Math.sqrt(sumOfSquares);
}

const priyankaRatings: UserRatings = { comedy: 3, action: 4, drama: 4, horror: 1, romance: 4 };
const justinRatings: UserRatings = { comedy: 4, action: 3, drama: 5, horror: 1, romance: 5 };
const morpheusRatings: UserRatings = { comedy: 2, action: 5, drama: 1, horror: 3, romance: 1 };
const yogiRatings: UserRatings = { comedy: 5, action: 5, drama: 5, horror: 2, romance: 5 };
const pinkyRatings: UserRatings = { comedy: 4, action: 3, drama: 5, horror: 2, romance: 5 };

const priyanka: User = {
  name: 'Priyanka',
  ratings: priyankaRatings,
  averageRating: calculateAverage(priyankaRatings),
  normalizedRatings: normalizeRatings(priyankaRatings, calculateAverage(priyankaRatings)),
};

const justin: User = {
  name: 'Justin',
  ratings: justinRatings,
  averageRating: calculateAverage(justinRatings),
  normalizedRatings: normalizeRatings(justinRatings, calculateAverage(justinRatings)),
};

const morpheus: User = {
  name: 'Morpheus',
  ratings: morpheusRatings,
  averageRating: calculateAverage(morpheusRatings),
  normalizedRatings: normalizeRatings(morpheusRatings, calculateAverage(morpheusRatings)),
};

const yogi: User = {
  name: 'Yogi',
  ratings: yogiRatings,
  averageRating: calculateAverage(yogiRatings),
  normalizedRatings: normalizeRatings(yogiRatings, calculateAverage(yogiRatings)),
};

const pinky: User = {
  name: 'Pinky',
  ratings: pinkyRatings,
  averageRating: calculateAverage(pinkyRatings),
  normalizedRatings: normalizeRatings(pinkyRatings, calculateAverage(pinkyRatings)),
};

const users = [priyanka, justin, morpheus, yogi, pinky];
const distances = users.map((user, index) => {
  return users.slice(index + 1).map((otherUser) => {
    return {
      pair: `${user.name} & ${otherUser.name}`,
      distance: euclideanDistance(user.normalizedRatings, otherUser.normalizedRatings),
    };
  });
});

console.log(distances);
