console.log("\n\nUsing Reduce as Map And Filter\n");
console.log(
  [1, 7, 3, 10, 5].reduce((acc, curr) => acc.concat(`${curr} -> `), "")
); // converted to string

console.log(
  [1, 7, 3, 10, 5, 4].reduce(
    (acc, curr) => (curr % 2 == 0 ? acc.concat(curr) : acc),
    []
  )
); // Filtering even numbers