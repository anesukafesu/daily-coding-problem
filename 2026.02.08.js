// Create a results array
// Loop through the permutations list from left to right, giving us the index of the element to insert in the results array
// Get the element at that index and add it to the results array
function rearrange(array, order) {
  const results = [];

  for (const index of order) {
    const element = array[index];
    results.push(element);
  }

  return results;
}
