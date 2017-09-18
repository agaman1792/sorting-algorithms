stats =
  comparisons: 0
  swaps: 0
  time: 0

# Stats-enhanced BubbleSort algorithm implementation
bubbleSort = (input) ->
  result = [].concat(input);
  len = result.length;
  i, j, temp;

  start = new Date().getTime();

  # Bubble sort algorithm implementation
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
  # Done bubble sorting

  stats.time = new Date().getTime() - start;
  return result;

module.exports = (input) -> ({
  result: bubbleSortWithStats(input),
  stats
});
