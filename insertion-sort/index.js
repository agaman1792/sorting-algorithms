const stats = {
  comparisons: 0,
  swaps: 0,
  time: 0
};

function insertionSort(input) {
  const result = [].concat(input); // New `workable` array construction
  const len = result.length;
  let i, j, el;
  
  const start = new Date().getTime(); // Start the algorithm execution timer

  // Insertion sort algorithm implementation
  for(i = 1; i < len; i++) {
    el = result[i];
    j = i;

    while(j > 0 && result[j - 1] > el) {
      stats.comparisons += 1;
      result[j] = result[j-1];
      j--;
    }

    result[j] = el;
  }
  // Done insertion sorting

  stats.time = new Date().getTime() - start; // End the algorithm execution timer
  return result;
}

module.exports = (input) => ({
  result: insertionSort(input),
  stats
});