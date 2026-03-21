function rearrange(array, order) {
  const results = [];

  for (const index of order) {
    const element = array[index];
    results.push(element);
  }

  return results;
}
