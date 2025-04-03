function optimalKNN(userCount: number): number {
  return Math.floor(Math.sqrt(userCount));
}

console.log(optimalKNN(1000000));
