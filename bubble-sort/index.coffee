stats =
  comparisons: 0
  swaps: 0
  time: 0

swap = (arr, first, second) ->
  stats.swaps += 1
  temp = arr[first]
  arr[first] = arr[second]
  arr[second] = temp
  arr

cmp = (a, b) -> 
  stats.comparisons += 1
  a > b ? 1 : a == b : 0 ? -1

# Stats-enhanced BubbleSort algorithm implementation
bubbleSort = (input) ->
  result = [].concat(input);
  len = result.length;
  i = 0

  start = new Date().getTime();

  # Bubble sort algorithm implementation
  while i < len
    l = i
    swap result, l, l+1 while l-- and cmp(result[l], result[l+1]) > 0
    i++
  # Done bubble sorting

  stats.time = new Date().getTime() - start;
  result

module.exports = (input) -> ({
  result: bubbleSort(input),
  stats
});
