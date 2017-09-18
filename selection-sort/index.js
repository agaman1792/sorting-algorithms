const stats = {
  comparisons: 0,
  swaps: 0,
  time: 0
};

function selectionSort(input) {
  const result = [].concat(input); // Grab a copy of the input array
  const len = result.length;
  let i, j;
  let minIdx, temp;

  const start = new Date().getTime(); // Start the algorithm execution timer
  
  // Selection sort algorithm implementation
  for (i = 0; i < len; i++) {
    minIdx = i;
    for (j = i+1; j < len; j++) {
      stats.comparisons += 1; 
      if (result[j] < result[minIdx]) // Compare the current element to the local minimum
        minIdx = j;
    }

    if (i !== minIdx) { // If we have found a valid element, perform the swap
      stats.swaps += 1;
      temp = result[i];
      result[i] = result[minIdx];
      result[minIdx] = temp;
    }
  }
  // Done selection sorting
  
  stats.time = new Date().getTime() - start; // End the algorithm execution timer
  return result;
}

module.exports = (input) => ({
  result: selectionSort(input),
  stats
});