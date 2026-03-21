// function rearrange(array, order) {
//   const results = [];

//   for (const index of order) {
//     const element = array[index];
//     results.push(element);
//   }

//   return results;
// }

function rearrange(array, order) {
  for (let i = 0; i < order.length; i++) {
    order[i] = array[order[i]];
  }
  return order
}
