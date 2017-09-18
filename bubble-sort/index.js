const stats = {
  comparisons: 0,
  swaps: 0,
  time: 0
};


// Pure BubbleSort algorithm implementation
function bubbleSort(input) {
  const len = input.length;
  let i, j, temp;

  for (i = len - 1; i >= 0; i--) {
    for (j = 1; j <= i; j++) {
      if (result[j - 1] > result[j]) {
        temp = result[j - 1];
        result[j - 1] = result[j];
        result[j] = temp;
      }
    }
  }
}

// Stats-enhanced BubbleSort algorithm implementation
function bubbleSortWithStats(input) {
  const result = [].concat(input);
  const len = result.length;
  let i, j, temp;

  var start = new Date().getTime();
  
  // Bubble sort algorithm implementation
  for (i = len - 1; i >= 0; i--) {
    for (j = 1; j <= i; j++) {
      stats.comparisons += 1;
      if (result[j - 1] > result[j]) {
        stats.swaps += 1;
        temp = result[j - 1];
        result[j - 1] = result[j];
        result[j] = temp;
      }
    }
  }
  // Done bubble sorting

  stats.time = new Date().getTime() - start;
  return result;
}

module.exports = (input) => ({
  result: bubbleSortWithStats(input),
  stats
});
